module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [0],
    'type-case': [1, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
}
