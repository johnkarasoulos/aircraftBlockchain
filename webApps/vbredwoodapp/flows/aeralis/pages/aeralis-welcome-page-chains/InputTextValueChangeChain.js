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

  class InputTextValueChangeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.value 
     * @param {string} params.current 
     */
    async run(context, { value, current }) {
      const { $page, $flow, $application } = context;

      const navigateToPageAeralisSystemDetailResult = await Actions.navigateToPage(context, {
        page: 'aeralis-system-detail',
        params: {
          inputToken: value,
          parentPage: $application.currentPage.id,
        },
      });
    }
  }

  return InputTextValueChangeChain;
});
