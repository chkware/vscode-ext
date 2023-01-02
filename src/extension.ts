import * as vscode from "vscode";
import { addHttpSnippet } from "./commands/add-http-snippet";
import { runFile } from "./commands/run-file";

export function activate(context: vscode.ExtensionContext) {
  const addHttpSnippetCommand = vscode.commands.registerCommand(
    "chkware.addHttpSnippet",
    () => {
      addHttpSnippet();
    }
  );
  const runFileCommand = vscode.commands.registerCommand(
    "chkware.runFile",
    () => {
      runFile();
    }
  );

  context.subscriptions.push(addHttpSnippetCommand);
  context.subscriptions.push(runFileCommand);
}

export function deactivate() {
  //
}
