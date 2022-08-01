import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'chkware.copyExamples',
    () => {
      //
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
