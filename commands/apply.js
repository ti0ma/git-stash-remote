const execa = require('execa');
const GitHub = require('github-api');

function * apply(gistId) {
  console.log('gist', gistId);
  const gh = new GitHub();
  const gist = gh.getGist(gistId); // not a gist yet

  const { data } = yield gist.read();
  const { content } = data.files['1234.patch'];
  console.log(content);
  // TODO: aplicar el parche
  yield execa.shell('git apply', {
    input: content + '\n'
  });
  console.log('Done! :)');
}

module.exports = apply;
