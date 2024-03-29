# OPG Modernising Lasting Power of Attorney Documents

![docs-workflow](https://github.com/ministryofjustice/opg-modernising-lpa-docs/actions/workflows/docs.yml/badge.svg)
![docs-workflow](https://img.shields.io/github/license/ministryofjustice/opg-modernising-lpa-docs.svg)
[![eleventy](https://img.shields.io/badge/staticgen-eleventy-%23707070.svg?style=flat-square)](https://11ty.io)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![repo standards badge](https://img.shields.io/badge/dynamic/json?color=blue&style=for-the-badge&logo=github&label=MoJ%20Compliant&query=%24.result&url=https%3A%2F%2Foperations-engineering-reports.cloud-platform.service.justice.gov.uk%2Fapi%2Fv1%2Fcompliant_public_repositories%2Fopg-modernising-lpa-docs)](https://operations-engineering-reports.cloud-platform.service.justice.gov.uk/public-github-repositories.html#opg-modernising-lpa-docs "Link to report")

Site URL: [https://docs.modernising.opg.service.justice.gov.uk](https://docs.modernising.opg.service.justice.gov.uk)

The Ministry of Justice and the Office of the Public Guardian (OPG) are working on a project to modernise lasting powers of attorney (MLPA).

The project aims to:

- increase safeguards for the donor
- improve the process of making and registering an LPA for donors, attorneys and third parties
- achieve sustainability for OPG whilst keeping LPAs as affordable as possible for all people in society

The Ministry of Justice intends to launch a public consultation on changes to the legal framework for LPAs later this year.

## Purpose

This site is to record all decisions, research and planning towards our GDS Assessment.

This is to encourage us to work in the open and allowing conversation and contributions from other parties.

We will utilise Github features to allow conversations for feedback and managing our content and history.

## Setup

To run the site locally follow these instructions

1. Checkout the repository
2. Run `yarn install`
3. Run `yarn run start` to launch a local version with hot reloading
4. Run `yarn run build` to build a local copy of the site into the folder `_site`

## Node Versions

We recommend using [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) while working on this project.

The version of node to use while working on this project is set in the [.nvmrc](./.nvmrc) file. This file is used for the CI and local development.

To ensure you are using the correct version of Node, run the following commands using `nvm`.

`nvm use` - will read the `.nvmrc` file and set your node version to it.

If you get an error saying it is not installed, run the following command to install the required version and enable it.

`nvm install` - will read the `.nvmrc` file, download that version and set your node version to it.

If you need to install a newer version of node, you should set the version in this file and run the above steps. The CI will automatically read this file and install the appropriate version.

## Tools and language

When writing articles consider using strong prose in your writing. This keeps things clear and concise. Consider the following plugins to help with your writing.

`@11ty/eleventy-plugin-inclusive-language`

([https://github.com/11ty/eleventy-plugin-inclusive-language](https://github.com/11ty/eleventy-plugin-inclusive-language)) installed to help with identifying non inclusive language.

**Name**: Code Spell Checker

```text
Id: streetsidesoftware.code-spell-checker
Description: Spelling checker for source code
Publisher: Street Side Software
```

VS Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

**Name**: Markdown All in One

```text
Id: yzhang.markdown-all-in-one
Description: All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)
Publisher: Yu Zhang
```

**VS Marketplace Link**: [https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

**Name**: markdownlint

```text
Id: davidanson.vscode-markdownlint
Description: Markdown linting and style checking for Visual Studio Code
Version: 0.42.1
Publisher: David Anson
```

**VS Marketplace Link**: [https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

OPG Modernising LPA Docs: Managed by opg-org-infra &amp; Terraform
