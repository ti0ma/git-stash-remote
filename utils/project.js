const fs = require('fs');
const projectName = require('project-name');

module.exports.isGitRepository = () => {
  const gitDir = `${process.cwd()}/.git`;
  return fs.existsSync(gitDir);
};

const name = projectName(process.cwd());

module.exports.name = name;
module.exports.filename = `${name}.patch`;
