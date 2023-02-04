import * as vscode from "vscode";
import { addHttpSnippet, addTestCaseSnippet } from "./add-snippet";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.addHttpSnippet", () =>
      addHttpSnippet()
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.addTestCaseSnippet", () =>
      addTestCaseSnippet()
    )
  );
}
