import * as vscode from "vscode";
import { addHttpSnippet } from "./add-http-snippet";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "chkware.addHttpSnippet",
    () => {
      addHttpSnippet();
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {
  //
}
