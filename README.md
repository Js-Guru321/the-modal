# THE Modal

This project will be powering the ability for users to sign up and sign in to ShopRunner. Since signing up and signing in drives growth within ShopRunner the project is titled THE Modal to reflect the importance of it. It's also a play on "THE Ohio State" that has become a famous saying for the university.

>  Legend also has it that "The" was used to show the other colleges which institution was supposed to be the leader in the state - both in size and in financial support from the legislature.
>
> - [The Ohio State University Archives](https://library.osu.edu/archives/faq)

The project name can also be viewed as an acronym:

- Totally
- Holistic
- Experience
- Made
- Of
- Design
- And
- Love

# Table of Contents

- [THE Modal](#the-modal)
- [Table of Contents](#table-of-contents)
  - [Environment Setup](#environment-setup)
    - [Requirements](#requirements)
      - [NVM](#nvm)
      - [Node](#node)
      - [NPM](#npm)
    - [Install Dependencies](#install-dependencies)
  - [Development](#development)
  - [Development Guide](#development-guide)
    - [File Names](#file-names)
    - [Environment Files](#environment-files)
    - [Styles](#styles)

## Environment Setup

Most of these instructions assumes the developer is using MacOS unless otherwise noted.

### Requirements

* [NVM](#nvm)
* [Node](#node)
* [NPM](#npm)
* [AWS](#aws)

#### NVM

[NVM](https://github.com/creationix/nvm) (Node Version Manager) is used to install and manage both [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) (Node Package Manager). Please follow the NVM installation instructions on their GitHub page.

#### Node

A [.nvmrc](.nvmrc) file has been created in this project to easily install the required Node version.

Navigate to your local clone of this repository and run the following commands to install and use the specified Node version:

``` bash
$ nvm install
$ nvm use
```

#### NPM

NPM will be installed automatically with Node.

### Install Dependencies

Navigate to your local clone of this repository and install the required packages:

```bash
$ npm install
```
Dependencies will be downloaded and placed into a `node_modules` directory inside your local repository. For the purposes of SCM these packages are ignored.

***Note:** If `npm install` is failing try using this command `npm install --registry https://artifactory.k8s.devops.s-9.us/artifactory/api/npm/npm/`*

## Development

In your local project directory, you can run these commands:

```bash
# Create a build for local development
$ npm run dev

# Start dev server on a different port
$ npm run dev -- -p <PORT_NUMBER>

# Production build of DIV Renderer
$ npm run build

# Spins up development server
$ npm run start
```

THE Modal also provides the following commands:

```bash
# Run the prettier and linter for any errors
$ npm run lint

# Run the linter on a single file
$ npm run lint:file -- path/to/file

# Run the prettier on project
$ npm run lint:pretty

# Run the test suite for any errors
$ npm run test
$ npm run test:watch

# Have Typescript do a type check
$ npm run type-check
$ npm run type-check:watch
```

## Development Guide

### File Names

File extension must be `.tsx` when using any JSX features. If no JSX is present in the file then it can have a `.ts` extension. For the sake of simplicity all files should have `.tsx` ext unless specifically needed (and documented).

### Environment Files

THE Modal allows `.env` files to manage environment variables. These variables will be bundled into final application, it is not to be used for secret values. The following `.env` are available to use:

- `.env`: Default settings
- `.env.local`: Local setting overrides
- `.env.test`, `.env.development`, `.env.production`: Environment specific settings
- `.env.test.local`, `.env.development.local`, `.env.production.local`: Local override of environment specific settings

When using `.env` files all variables must be prefixed with `APP_`. Use `process.env` to access variables in codebase.

Example:

```plaintext
# .env file
APP_MY_SECRET=1234
```

```javascript
// MyModule.ts
console.log(process.env.APP_MY_SECRET); // returns '1234'
```

### Styles

THE Modal uses Bootstrap with [React Bootsrap](https://react-bootstrap.github.io/). Any Bootstrap configuration must be applied first before importing Bootstrap components.
