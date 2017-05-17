'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'japanese-ten-maru-converter:convert': () => this.convert()
    }));
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'japanese-ten-maru-converter:reconvert': () => this.reconvert()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  convert() {
    const editor = atom.workspace.getActiveTextEditor();
    let text = editor.getText();
    text = text.replace('、','，');
    text = text.replace('。','．');
    editor.setText(text);
  },
  reconvert() {
    const editor = atom.workspace.getActiveTextEditor();
    let text = editor.getText();
    text = text.replace('，','、');
    text = text.replace('．','。');
    editor.setText(text);
  }
};
