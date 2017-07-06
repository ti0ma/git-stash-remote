const execa = require('execa');
const GitHub = require('github-api');

function * create() {
  console.log('Creating new Gist');
  yield execa.shell('git add .');
  const diff = yield execa.shell('git diff --cached');
  yield execa.shell('git reset HEAD');
  if (diff.code === 0) {
    console.log('diff');
    const content = diff.stdout;

    const gh = new GitHub();
    const gist = gh.getGist(); // not a gist yet
    const createdGist = yield gist.create({
      public: true,
      files: {
        '1234.patch': {
          content
        }
      }
    });

    const { data } = createdGist;
    console.log('id', data.id);
    console.log('html_url', data.html_url);
  }
}


module.exports = create;
