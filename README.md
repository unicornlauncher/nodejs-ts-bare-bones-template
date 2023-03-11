[![Continuous Integration](https://github.com/unicornlauncher/nodejs-ts-bare-bones-template/actions/workflows/ci.yml/badge.svg)](https://github.com/unicornlauncher/nodejs-ts-bare-bones-template/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Minimum node.js version](https://img.shields.io/badge/nodejs-16.14.0-GREEN.svg)](https://github.com/unicornlauncher/nodejs-ts-bare-bones-template)
[![Minimum yarn version](https://img.shields.io/badge/yarn-1.22.19-GREEN.svg)](https://github.com/unicornlauncher/nodejs-ts-bare-bones-template)

# NodeJS + TS bare bones template

This NodeJS template includes the bare minimum setup to help you get started. We didn't try to guess what you are going to do based on this template, so we didn't configure any web-server or cron-job related tooling (although you can do it quite easily based on what's already in place). Nevertheless, If you want to build an express app, please check out our [nodejs-ts-express](https://github.com/unicornlauncher/nodejs-ts-express-template) template.

## Code formatting and style

We're using ESLint for code style checks and Prettier for file formatting checks. The setup of each of them is described below.

### Prettier config

Prettier is configured with a minimum set of rules, such as `tabWidth` and `arrowParens` preferences:

```json
{
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "printWidth": 100
}
```

Feel free to extend this config as your team feels fit.

### ESLint config

ESLint was configured to use the standard recommended setup (`standard-with-typescript`) and to extend prettier rules, so there's no conflict between the two. The config file looks like this:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["standard-with-typescript", "prettier"],
  "ignorePatterns": ["dist/**/*.js"],
  "overrides": [],
  "parserOptions": {
    "project": ["tsconfig.json"],
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

## Commits

In order to provide commit coherence between contributors, a set of commit rules were put in place. Using conventional commits as a base and some automation provided by [commitizen](https://github.com/commitizen-tools/commitizen), [git-cz](https://github.com/streamich/git-cz) and [commitlint](https://github.com/conventional-changelog/commitlint), contributors are free to either choose to handcraft a conventional commit message using `git commit` or to use `yarn cmt` and use a commit assistant to make sure their messages are well-formatted.

### Pre-commit hooks

To make sure the codebase remains clean and healthy, a set of pre-commit hooks were added. Each of them are described below.

#### Commit messages

To make sure that commit messages remain compliant to the conventional commits convention, `commitlint` was configured. It will fail the commit in case we try to add a malformed message.

#### Static analysis and tests

We're also running a `prettier:check` to detect malformed files, ESLint to detect code style violations, and all the unit tests to make sure the test suite is green and consistent.

## Testing

Jest was the chosen test engine to run our unit tests. A simple test was added to `src` to make sure everything is working fine.

## Integration pipeline

A simple GitHub Actions integration pipeline was configured. It installs the dependencies, checks code formatting and style, runs the tests and builds the project. It looks like:

```yml
- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v3
  with:
    node-version: ${{ matrix.node-version }}

- name: Install dependencies
  run: npm install

- name: Check formatting
  run: npm run prettier:check

- name: Check code style
  run: npm run lint

- name: Build project
  run: npm run build

- name: Run unit tests
  run: npm run test
```

## Summary of available scripts

Considering all the topics above, the full list of available scripts are:

- `dev`: uses `ts-node-dev` to transpile the code in-memory for development
- `build` erases everything in the `dist` directory and recreate it using `tsc` (the typescript compiler)
- `start`: starts the application from the `dist` directory (make sure to run `yarn build` first)
- `test`: runs all the unit tests
- `prettier:check`: perform Prettier checks at the `src` directory
- `prettier:fix`: fix all Prettier warnings in the `src` directory
- `lint`: runs ESLint on the project
- `cmt`: spins up the `git-cz` commit assistant

Happy coding! 🚀
