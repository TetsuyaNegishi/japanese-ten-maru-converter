'use babel';

describe('JapaneseTenMaruConverter', () => {
  let workspaceElement;
  let textEditor;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    atom.packages.activatePackage('japanese-ten-maru-converter');
    waitsForPromise(() => atom.workspace.open('test.md'));

    runs(() => {
      textEditor = atom.workspace.getActiveTextEditor();
    });
  });

  describe('when the japanese-ten-maru-converter:convert event is triggered', () => {
    it('convert [、。]', () => {
      runs(() => {
        textEditor.setText('、。');
        atom.commands.dispatch(workspaceElement, 'japanese-ten-maru-converter:convert');
        expect(textEditor.getText()).toBe('，．');
      });
    });
  });
});
