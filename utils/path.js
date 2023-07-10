const path = require("path");
const { SyntheticModule } = require("vm");

module.exports = path.dirname(process.mainModule.filename);
