import * as vscode from "vscode";
import * as path from "path";

export async function runFile(): Promise<void> {
  const activeTextEditor: vscode.TextEditor | undefined =
    vscode.window.activeTextEditor;

  if (!activeTextEditor) {
    vscode.window.showWarningMessage("Please open a .chk file first.");
    return;
  }

  const { openedFileName, openedFolder } = getFileInfo(
    activeTextEditor.document,
  );

  const commandType = getCommandType(activeTextEditor.document.getText());

  // check file extension and command type
  if (!openedFileName.endsWith(".chk") || !commandType) {
    vscode.window.showWarningMessage("Not a valid .chk file to run.");
    return;
  }

  const terminal = vscode.window.createTerminal({
    name: "chkware - Run",
    cwd: openedFolder,
  });

  terminal.show(true);

  // GUI terminal needs some time to be opened
  setTimeout(() => {
    terminal.sendText(`chk ${commandType} ${openedFileName}`);
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

function getCommandType(code: string): string | undefined {
  // e.g.: version: default:http:0.7.2 | version: 'default:http:0.7.2' | version: "default:http:0.7.2"
  const pattern = /version: *(?:'|")?default:([^'"]*)(?:'|")?/;

  const match = code.match(pattern); // http:0.7.2

  if (match && match[1]) {
    const commandType = match[1].split(":");

    return commandType[0]; // http
  }
}
