#!/usr/bin/env node

const fs = require('fs');
const co = require('co');
const meow = require('meow');

const { isGitRepository } = require('./utils/project');

const apply = require('./commands/apply');
const create = require('./commands/create');

const cli = meow(`
  Usage
    $ stash-remote [apply <key>]

  Examples
    stash-remote
    stash-remote apply
`);

const input = cli.input;
// const opts = cli.flags;

console.log(`Running at ${process.cwd()}`);
if (!isGitRepository()) {
  console.error('FATAL: No git repository found in current folder');
  process.exit(1);
}

co(function * () {
  if (input.length > 1) {
    const command = input.shift();

    switch (command) {
      case 'apply':
        const gistId = input.shift();
        yield apply(gistId);
        break;
    }
    return;
  }
  yield create();
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});
