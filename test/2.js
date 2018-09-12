// const babylon = require('babylon');
// const traverse = require('babel-traverse').default;
const t = require('babel-types');
const template = require('babel-template');
const generate = require('babel-generator').default;

const buildRequire = template(`
  var IMPORT_NAME = require(SOURCE);
`);

const ast = buildRequire({
  IMPORT_NAME: t.identifier("myModule"),
  SOURCE: t.stringLiteral("my-module")
});

console.log(generate(ast).code);
// var myModule = require("my-module");