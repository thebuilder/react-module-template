const execa = require('execa');
const path = require('path');

const basename = path.parse(process.cwd()).name;

if (basename !== 'react-module-template' && !process.env.CI) {
  setup();
}

function setup() {
  execa('plop', ['--plopfile', 'setup/configure-module.js', 'module'], {
    stdio: 'inherit',
  });
}
