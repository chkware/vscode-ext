import * as vscode from 'vscode';
import examples, { ExampleItem } from './examples';

export async function copyExamples() {
  createQuickPickExamples();
}

function pasteExample(item: ExampleItem) {
  const activeTextEditor = vscode.window.activeTextEditor;

  activeTextEditor &&
    activeTextEditor
      .edit(function (textInserter) {
        textInserter.delete(activeTextEditor.selection); // delete selected text if there's any
      })
      .then(function () {
        activeTextEditor.edit(function (textInserter) {
          textInserter.insert(activeTextEditor.selection.start, item.snippet);
        });
      });
}

async function createQuickPickExamples() {
  await vscode.window
    .showQuickPick(examples, {
      placeHolder: 'Select an example',
    })
    .then((item) => {
      item && pasteExample(item);
    });
}
