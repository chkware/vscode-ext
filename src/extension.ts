import * as vscode from 'vscode';
import { getExamples } from './get-examples';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'chkware.getExamples',
    () => {
      getExamples();
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
