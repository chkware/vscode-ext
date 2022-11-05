import * as vscode from "vscode";
import snippets, { SnippetItem } from "./snippets";

export async function addHttpSnippet(): Promise<void> {
  const item = await vscode.window.showQuickPick(snippets, {
    placeHolder: "Select a snippet",
  });

  item && pasteSnippet(item);
}

async function pasteSnippet(item: SnippetItem): Promise<void> {
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
