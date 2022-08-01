import * as vscode from 'vscode';
import { copyExamples } from './copy-examples';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'chkware.copyExamples',
    () => {
      copyExamples();
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
