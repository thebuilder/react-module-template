const fs = require("fs");
const docGen = require("react-docgen");
const docsToMarkdown = require("react-docs-markdown");
const argv = require("minimist")(process.argv.slice(2));
const propsPlaceholder = /(<!--- generated-props --->)([\s\S]+?)(<!--- generated-props-end --->)/g;

function generateDocs(src) {
  console.log(`📝  Generate docs for "${src}"`);
  const readme = fs.readFileSync("./README.md", "utf-8");

  if (readme.includes("<!--- generated-props --->")) {
    const source = fs.readFileSync(src);
    try {
      const api = docGen.parse(source);
      const md = docsToMarkdown(api);
      /* Find and update the placeholder inside the readme */
      const updated = readme.replace(propsPlaceholder, `$1${md}$3`);
      fs.writeFileSync("./README.md", updated, "utf-8");
      console.log("✅  Updated props in readme.md");
    } catch (e) {
      console.error(`⚠️  Failed to parse docs from module from "${src}".`);
    }
  } else {
    console.log(
      "Could not find props placeholder in readme. Skipping props generation."
    );
    console.log(
      'Make sure it includes "<!--- generated-props --->" and "<!--- generated-props-end --->".'
    );
  }
}

const src = argv._[0] || "./src/index.js";

generateDocs(src);
