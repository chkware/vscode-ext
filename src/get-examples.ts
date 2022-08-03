import * as vscode from 'vscode';
import examples, { ExampleItem } from './examples';

export async function getExamples() {
  const item = await vscode.window.showQuickPick(examples, {
    placeHolder: 'Select an example',
  });

  item && pasteExample(item);
}

async function pasteExample(item: ExampleItem) {
  const activeTextEditor = vscode.window.activeTextEditor;

  if (!activeTextEditor) {
    return;
  }

  // delete selected text if there's any
  await activeTextEditor.edit((editBuilder) => {
    editBuilder.delete(activeTextEditor.selection);
  });

  await activeTextEditor.edit((editBuilder) => {
    editBuilder.insert(activeTextEditor.selection.start, item.snippet);
  });
}
