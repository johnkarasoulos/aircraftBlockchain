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

  class PageVbEnterChain extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      await Actions.resetVariables(context, {
        variables: [
          '$page.variables.allAircrafts',
        ],
      });

      const callFunctionResult = await $page.functions.setBody2RetrieveAllAirplanes($page.variables.retrieveAllAirplanes, $page.variables.bc_chaincode_name);

      await Actions.callRest(context, {
        endpoint: 'Retrieve-All-Tokens/getAllTokens',
        body: callFunctionResult,
        responseType: 'application:loadAllTokens',
      }, { id: 'callAllTokens' });

      $page.variables.allAircrafts.data = undefined;
    }
  }

  return PageVbEnterChain;
});
