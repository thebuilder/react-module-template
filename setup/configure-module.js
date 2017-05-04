const kebabCase = require("lodash/fp/kebabCase");
const startCase = require("lodash/fp/startCase");
const properCase = require("pascal-case");
const fs = require("fs");
const path = require("path");
const del = require("del");
const jsonfile = require("jsonfile");
const execa = require("execa");

module.exports = plop => {
  // Intro message
  plop.setGenerator("module", {
    description: "Configure the module",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of your module?",
        validate: value => (!value ? "Name is required" : true),
        default: result => startCase(path.parse(process.cwd()).name),
      },
      {
        type: "input",
        name: "description",
        message: "Enter a short description of the new module?",
      },
      {
        type: "input",
        name: "githubUser",
        message: "What is your Github username/org?",
        validate: value =>
          (!value ? "You need to enter your Github username." : true),
      },
      {
        type: "input",
        name: "author",
        message: "What is your full name?",
        validate: value => (!value ? "You need to enter your name." : true),
      },
    ],
    actions: data => [
      () => deleteReadme(),
      {
        type: "add",
        path: "../README.md",
        templateFile: "readme-template.md",
      },
      {
        type: "modify",
        path: "../package.json",
        pattern: /react-module-template/g,
        template: "{{kebabCase name}}",
      },
      {
        type: "modify",
        path: "../package.json",
        pattern: /thebuilder/g,
        template: "{{lowerCase githubUser}}",
      },
      {
        type: "modify",
        path: "../src/index.js",
        pattern: /HelloWorld/g,
        template: "{{properCase name}}",
      },
      {
        type: "modify",
        path: "../src/__stories__/HelloWorld.story.js",
        pattern: /HelloWorld/g,
        template: "{{properCase name}}",
      },
      {
        type: "modify",
        path: "../src/__tests__/HelloWorld.test.js",
        pattern: /HelloWorld/g,
        template: "{{properCase name}}",
      },
      () => configurePackage(data),
      () => renameWorld(data.name),
      () => deleteFromPackage(["postinstall"], "scripts"),
      () =>
        deleteFromPackage(["del", "jsonfile", "execa", "plop", "pascal-case"]),
      () => deleteSetupFiles(),
      () => install(),
    ],
  });
};

function configurePackage(data) {
  const pck = jsonfile.readFileSync("./package.json");
  pck.author = startCase(data.author);
  pck.description = data.description || "";
  pck.version = "0.1.0";
  pck.scripts.postpublish = "npm run deploy";

  jsonfile.writeFileSync("./package.json", pck, { spaces: 2 });
  return `Updated package.json`;
}

function renameWorld(name) {
  fs.renameSync(
    path.join(process.cwd(), "src/__stories__/HelloWorld.story.js"),
    path.join(process.cwd(), `src/__stories__/${properCase(name)}.story.js`)
  );

  fs.renameSync(
    path.join(process.cwd(), "src/__tests__/HelloWorld.test.js"),
    path.join(process.cwd(), `src/__tests__/${properCase(name)}.test.js`)
  );

  return "Renamed HelloWorld files";
}

function deleteFromPackage(entries, from = "devDependencies") {
  const pck = jsonfile.readFileSync("./package.json");

  entries.forEach(key => {
    delete pck[from][key];
  });

  jsonfile.writeFileSync("./package.json", pck, { spaces: 2 });
  return `Removed [${entries.join(", ")}] from '${from}' in package.json.`;
}

function deleteReadme() {
  return del("README.md").then(paths => "Replace readme.md");
}

function deleteSetupFiles() {
  return del("setup/").then(paths => "Setup files deleted");
}

function install() {
  execa.sync("yarn", { stdio: "inherit" });
  return "Installed yarn dependencies";
}
