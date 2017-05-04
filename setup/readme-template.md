# {{ kebabCase name }}
[![Travis](https://travis-ci.org/{{ githubUser }}/{{ kebabCase name }}.svg?branch=master)](https://travis-ci.org/{{ githubUser }}/{{ kebabCase name }})
[![Dependency Status](https://david-dm.org/{{ githubUser }}/{{ kebabCase name }}.svg)](https://david-dm.org/{{ githubUser }}/{{ kebabCase name }})
[![npm](https://img.shields.io/npm/v/{{ kebabCase name }}.svg)](https://www.npmjs.com/package/{{ kebabCase name }})

{{ description }}

```js
import {{ properCase name }} from '{{ kebabCase name }}'

<{{ properCase name }} name="World" />
```

## Demo
See [https://{{ githubUser }}.github.io/{{ kebabCase name }}/]() for a demo.

## Installation

Install using [Yarn](https://yarnpkg.com):
```sh
yarn add {{ kebabCase name }}
```

or NPM:
```sh
npm install {{ kebabCase name }} --save
```

<!--- generated-props --->
## Props
| Name | Type   | Default | Required | Description                |
| ---- | ------ | ------- | -------- | -------------------------- |
| name | String | 'world' | false    | Who should we greet today? |
<!--- generated-props-end --->