import * as vscode from "vscode";
import examples, { ExampleItem } from "./examples";

export async function getExamples(): Promise<void> {
  const item = await vscode.window.showQuickPick(examples, {
    placeHolder: "Select an example",
  });

  item && pasteExample(item);
}

async function pasteExample(item: ExampleItem): Promise<void> {
  const activeTextEditor: vscode.TextEditor | undefined =
    vscode.window.activeTextEditor;

  if (activeTextEditor) {
    await activeTextEditor.edit((editBuilder: vscode.TextEditorEdit): void => {
      // delete selected text if there's any
      editBuilder.delete(activeTextEditor.selection);
      editBuilder.insert(activeTextEditor.selection.start, item.snippet);
    });
  } else {
    vscode.workspace.openTextDocument({
      content: item.snippet,
      language: "yaml",
    });
  }
}
