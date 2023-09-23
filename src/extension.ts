import * as vscode from "vscode";
import {
  addHttpSnippet,
  addTestCaseSnippet,
  addFetchSnippet,
  addValidationSnippet,
} from "./commands/add-snippet";
import { runFile } from "./commands/run-file";
import { CHKWARE_DOCUMENTATION_URL } from "./constants";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.addHttpSnippet", () =>
      addHttpSnippet(),
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.addTestCaseSnippet", () =>
      addTestCaseSnippet(),
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.addFetchSnippet", () =>
      addFetchSnippet(),
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.addValidationSnippet", () =>
      addValidationSnippet(),
    ),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.runFile", () => runFile()),
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("chkware.viewDocumentation", () =>
      vscode.env.openExternal(vscode.Uri.parse(CHKWARE_DOCUMENTATION_URL)),
    ),
  );
}
