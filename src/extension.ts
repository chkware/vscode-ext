import * as vscode from "vscode";
import { addHttpSnippet } from "./add-snippet";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.addHttpSnippet", () =>
      addHttpSnippet()
    )
  );
}
