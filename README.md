# git-stash-remote

Save your stash to gist and apply it wherever you want. Useful to save work between machines without committing the WIP.

## Usage

`npm install -g .`

- `stash-remote` creates a gist with a patch file of the current changes. **WARNING: it will create a public gist**
- `stash-remote apply <gist>` applies the patch to current folder

## How to try it

- Create a local git repository
- Create some files and commit them
- Make some modifications or create new files
- Run `stash-remote`
- Run `git checkout .` and remove new files if you created any
- Run `stash-remote apply <gist>` and `git status` to check the stash is applied correctly

## TODO

- Project name by folder name or git remote
  - "No stash found for _project_ project"
  - Select the stash to apply
- Configure github token
- Project management
- Several stashes per project
