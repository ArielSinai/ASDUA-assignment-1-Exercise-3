const vscode = require('vscode');

/**
 * Called when the extension is activated.
 * For syntax highlighting only, we don't need to do anything here.
 */
function activate(context) {
  console.log('ArielLang extension is now active!');
}

/**
 * Called when the extension is deactivated.
 */
function deactivate() {}

module.exports = {
  activate,
  deactivate
};

