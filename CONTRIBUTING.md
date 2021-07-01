# Contributing to Modernising Lasting Power of Attorney Documentation

Most communication is done through Ministry of Justice Digital & Technology Slack in the `opg-modernisinglpa-chat` or the [issues](https://github.com/ministryofjustice/opg-modernising-lpa-docs/issues) feature on this Github repository.

## Pre-requisites

A Github account in order to contribute to the issues or raise pull requests.

## Development lifecycle

Contribution should be managed via Github issues where conversation can be had and saved for future reference.

Depending on need we may look at other features such as wikis or discussions features for better communication within the documentation.

### Development

To add content to the site, follow these steps.

1. Go to [https://github.com/ministryofjustice/opg-modernising-lpa-docs/projects/1](https://github.com/ministryofjustice/opg-modernising-lpa-docs/projects/1)
2. Add a new note to the ToDo column and then using the 3 dots on the note select convert to issue.
3. Describe the addition you wish to make
4. If you want to start on it, move it to In Progress
5. Fork or checkout a new branch (depending on your permissions)
6. Run `yarn install` to install dependencies
7. Create a new `.md` file following the example files or patterns of existing content
8. Once written run the command `yarn run lint:all`
9. Fix any formatting issue identified
10. Commit, push and raise a PR

### Peer review

Once you're happy with your work, you should move it to the "Code Review" column to indicate that it is ready for peer review.

### Acceptance

Once your work has been suitably reviewed and you've ensured that all tests are passing, it can be approved by the OPG team and merged.

Once done you can move your ticket to the Done column.

### Releasing

One a ticket has been merged into `main` the CI pipeline will automatically build and deploy your change.
