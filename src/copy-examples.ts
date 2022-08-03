import * as vscode from 'vscode';
import examples, { ExampleItem } from './examples';

export async function copyExamples() {
  createQuickPickExamples();
}

function pasteExample(item: ExampleItem) {
  console.log(item);

  // to do https://github.com/chkware/vscode-ext/issues/4
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
