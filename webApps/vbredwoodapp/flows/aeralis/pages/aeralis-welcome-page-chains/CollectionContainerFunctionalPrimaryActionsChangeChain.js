define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class CollectionContainerFunctionalPrimaryActionsChangeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any[]} params.functionalPrimaryActions 
     */
    async run(context, { functionalPrimaryActions }) {
      const { $page, $flow, $application } = context;

      const navigateToPageAeralisCreateSystemResult = await Actions.navigateToPage(context, {
        page: 'aeralis-create-system',
      });
    }
  }

  return CollectionContainerFunctionalPrimaryActionsChangeChain;
});
