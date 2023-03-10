module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '๐ค',
      value: 'chore',
    },
    ci: {
      description: 'CI related changes',
      emoji: '๐ก',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '๐',
      value: 'docs',
    },
    feat: {
      description: 'A new feature',
      emoji: 'โจ',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: '๐',
      value: 'fix',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: 'โก๏ธ',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: 'โป๏ธ',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: '๐น',
      value: 'release',
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '๐จ',
      value: 'style',
    },
    test: {
      description: 'Adding tests',
      emoji: '๐งช',
      value: 'test',
    },
    messages: {
      type: "Select the type of change that you're committing:",
      customScope: 'Select the scope this component affects (optional):',
      subject: '(optional) Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n',
    },
  },
};
