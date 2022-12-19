# Aspose.HTML Cloud

This repository contains Aspose.HTML Cloud documentation.

## Workflow

In order to make changes in the repository, you need to:

1. Create a branch with the proposed changes whose name matches the feature/* pattern.
2. Create a pull request for this branch. It will be automatically assigned to a suitable reviewer.
3. Once the request is approved, it can be merged.
## Starting guide

### 1. Install packages
`npm i`
### 2. Update Submodules
`git submodule update --init -- "themes/lutsk-aspose-theme"`


### 3. Start Hugo
Run: `.\node_modules\hugo-extended\vendor\hugo.exe server -c 'content\html' --baseURL https://docs.aspose.cloud/html`

New Run Command: `.\node_modules\hugo-extended\vendor\hugo.exe server -c 'content' --baseURL https://docs.aspose.cloud/html`

Or run powershell script in the root: `run.ps1`


### 4. Navigate in browser
The app is now up and running here: `http://localhost:1313/html`


