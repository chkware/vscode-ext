// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import {
  addFetchSnippet,
  addValidateSnippet,
  addWorkflowSnippet,
} from "./commands/add-snippet";
import { runFile } from "./commands/run-file";

export const DOCUMENTATION_URL = "https://chkware.com/docs";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.addFetchSnippet", () =>
      addFetchSnippet(),
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.addValidateSnippet", () =>
      addValidateSnippet(),
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.addWorkflowSnippet", () =>
      addWorkflowSnippet(),
    ),
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.runFile", () => runFile()),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.viewDocumentation", () =>
      vscode.env.openExternal(vscode.Uri.parse(DOCUMENTATION_URL)),
    ),
  );

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log("CHKware extension activated!");
}

// This method is called when your extension is deactivated
export function deactivate() {
  console.log("CHKware extension deactivated!");
}
