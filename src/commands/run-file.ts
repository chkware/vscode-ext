import * as vscode from "vscode";
import * as path from "path";

export async function runFile(): Promise<void> {
  const activeTextEditor: vscode.TextEditor | undefined =
    vscode.window.activeTextEditor;

  if (!activeTextEditor) {
    vscode.window.showWarningMessage("Please open a chk file first.");
    return;
  }

  const { openedFileName, openedFolder } = getFileInfo(
    activeTextEditor.document
  );

  // check file extension
  if (!openedFileName.endsWith(".chk")) {
    vscode.window.showWarningMessage("Not a valid chk file to run.");
    return;
  }

  const terminal = vscode.window.createTerminal({
    name: "chkware - Run",
    cwd: openedFolder,
  });

  terminal.show(true);

  // GUI terminal needs some time to be opened
  setTimeout(() => {
    terminal.sendText(`chk http ${openedFileName}`);
  }, 1000);
}

function getFileInfo(textDocument: vscode.TextDocument): {
  openedFilePath: string;
  openedFileName: string;
  openedFolder: string;
} {
  const openedFilePath = textDocument.uri.fsPath;
  const openedFileName = path.basename(openedFilePath);
  const openedFolder = path.dirname(openedFilePath);

  return {
    openedFilePath,
    openedFileName,
    openedFolder,
  };
}
