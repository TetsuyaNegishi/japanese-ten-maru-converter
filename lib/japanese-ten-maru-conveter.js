'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
  },

  convert() {

  }

};
