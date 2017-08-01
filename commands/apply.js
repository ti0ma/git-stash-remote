const execa = require('execa');
const GitHub = require('github-api');
const project = require('../utils/project');

function * apply(gistId) {
  console.log('gist', gistId);
  const gh = new GitHub();
  const gist = gh.getGist(gistId); // not a gist yet

  const { data } = yield gist.read();
  // TODO: Improve this. Currently there is only one file.
  const file = Object.keys(data.files).pop();
  const { content } = data.files[file];
  yield execa.shell('git apply', {
    input: `${content}\n`
  });
  console.log('Done! :)');
}

module.exports = apply;
