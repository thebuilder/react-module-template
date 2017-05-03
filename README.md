# react-module-template
[![Travis](https://travis-ci.org/thebuilder/react-module-template.svg?branch=master)](https://travis-ci.org/thebuilder/react-module-template)
[![Dependency Status](https://david-dm.org/thebuilder/react-module-template.svg)](https://david-dm.org/thebuilder/react-module-template)

## Ready, set, publish!
Template comes with all the tools you need, to get started with publishing a React module.

### Installation
Install the template by cloning this repository, removing `.git` and running `yarn`.

```sh
git clone git@github.com:thebuilder/react-scroll-percentage.git {PROJECT_NAME}
cd {PROJECT_NAME}
rm -rf .git
yarn
```

After the `node_modules` have been installed, you will be prompted to answer a few customization questions regarding the module you are creating - these are used to update the `package.json`, `readme.md` etc.

### Tools
* **[Babel](https://babeljs.io/)** - All your code is compiled with Babel, so it can be consumed as NPM module.
* **[Jest](http://facebook.github.io/jest/)** - Easily add some tests with jest and [Enzyme](https://github.com/airbnb/enzyme/).
* **[Storybook](https://github.com/storybooks/storybook)** - React Storybook to showcase your Module.
* **[ESLint](http://eslint.org)** - The project has configured with the basic [eslint-config-react-app](https://github.com/facebookincubator/create-react-app/tree/master/packages/eslint-config-react-app), to catch common issues.
* **[Prettier](https://github.com/jlongster/prettier)** - All your sources are prettified with prettier on commit.
* **[Travis CI](https://travis-ci.org/)** - All commits are tested on Travis CI.
* **Github Pages** - Auto deploy to Github Pages when publishing.

## Developing
To start development, you can run `yarn dev` to start Storybook on `http://localhost:9000`.

## Publish
I recommend using the excellent [NP](https://github.com/sindresorhus/np), whenever you are ready to release a new version. This ensures everything is versioned, committed and tested, before you publish.

### Github Pages
Whenever you publish the module, the `postpublish` script will build the Storybook and publish it to the `gh-pages` branch using [git-directory-deploy](https://github.com/lukekarrys/git-directory-deploy).