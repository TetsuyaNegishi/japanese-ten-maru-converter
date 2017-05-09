'use babel';

import JapaneseTenMaruConveter from '../lib/japanese-ten-maru-converter';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('JapaneseTenMaruConveter', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('japanese-ten-maru-conveter');
  });

  describe('when the japanese-ten-maru-conveter:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.japanese-ten-maru-conveter')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'japanese-ten-maru-conveter:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.japanese-ten-maru-conveter')).toExist();

        let japaneseTenMaruConveterElement = workspaceElement.querySelector('.japanese-ten-maru-conveter');
        expect(japaneseTenMaruConveterElement).toExist();

        let japaneseTenMaruConveterPanel = atom.workspace.panelForItem(japaneseTenMaruConveterElement);
        expect(japaneseTenMaruConveterPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'japanese-ten-maru-conveter:toggle');
        expect(japaneseTenMaruConveterPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.japanese-ten-maru-conveter')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'japanese-ten-maru-conveter:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let japaneseTenMaruConveterElement = workspaceElement.querySelector('.japanese-ten-maru-conveter');
        expect(japaneseTenMaruConveterElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'japanese-ten-maru-conveter:toggle');
        expect(japaneseTenMaruConveterElement).not.toBeVisible();
      });
    });
  });
});
