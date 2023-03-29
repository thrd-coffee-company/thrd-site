import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import axios from 'axios';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  company: Yup.string(),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Invalid phone number').required('Required'),
  message: Yup.string().min(10, 'Too Short!').required('Required')
});

const FormspreeForm = () => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        axios({
          method: 'POST',
          url: 'https://formspree.io/f/xpzejprw',
          data: values
        })
        .catch((error) => {
          console.log(error);
        });
        actions.resetForm();
        actions.setSubmitting(false);
        router.push('/success');
      }}
    >
      {(props) => (
        <Form
          name="book-event"
          method="post"
          action="/success"
        >
          <Stack spacing={6}>
            <Stack direction={{ base: 'column', lg: 'row' }} spacing={8}>
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
          <Stack mt={4} direction="row">
            <Button
              type="submit"
              mr={4}
              isLoading={props.isSubmitting}
              bg="purple.600"
              _hover={{ bg: 'purple.700' }}
              color="white"
            >
              Submit
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export { FormspreeForm };
