import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  company: Yup.string(),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Invalid phone number"),
  message: Yup.string().min(10, "Too Short!").required("Required"),
});

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "book-event", ...values }),
        })
          .then(() => router.push("/success"))
          .catch((error) => alert(error));

        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form
          name="book-event"
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="book-event" />
          <Stack spacing={6}>
            <Stack direction={{ sm: "column", lg: "row" }} spacing={8}>
              <Field name="firstName">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.firstName && form.touched.firstName}
                  >
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input
                      {...field}
                      id="firstName"
                      placeholder="First name"
                      bg="white"
                    />
                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="lastName">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.lastName && form.touched.lastName}
                  >
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input
                      {...field}
                      id="lastName"
                      placeholder="Last name"
                      bg="white"
                    />
                    <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Stack>
            <Field name="company">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.company && form.touched.company}
                >
                  <FormLabel htmlFor="company">Company</FormLabel>
                  <Input
                    {...field}
                    id="company"
                    placeholder="Company"
                    bg="white"
                  />
                  <FormErrorMessage>{form.errors.company}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="company">Email</FormLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="example@example.com"
                    bg="white"
                    type="email"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phoneNumber">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.phoneNumber && form.touched.phoneNumber
                  }
                >
                  <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
                  <Input
                    {...field}
                    id="phoneNumber"
                    placeholder="Phone number"
                    bg="white"
                    type="tel"
                  />
                  <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.message && form.touched.message}
                >
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    {...field}
                    id="message"
                    placeholder="Tell us about your event!"
                    bg="white"
                  />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Stack>
          <Button
            type="submit"
            mt={4}
            isLoading={props.isSubmitting}
            bg="purple.600"
            _hover={{ bg: "purple.700" }}
            color="white"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
