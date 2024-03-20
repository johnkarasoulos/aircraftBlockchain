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

  class spPrimaryActionChainGo2CreateAirplaine extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.key 
     * @param {number} params.index 
     * @param {any} params.current 
     */
    async run(context, { key, index, current }) {
      const { $page, $flow, $application } = context;

      const navigateToPageAeralisCreateAirplaneResult = await Actions.navigateToPage(context, {
        page: 'aeralis-create-airplane',
      }, { id: 'gotoCreateAirplane' });
    }
  }

  return spPrimaryActionChainGo2CreateAirplaine;
});
