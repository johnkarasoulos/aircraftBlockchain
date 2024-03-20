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

  class InAppNavigationSpSelectionActionChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.currentId 
     * @param {string} params.previousId 
     */
    async run(context, { currentId, previousId }) {
      const { $page, $flow, $application } = context;

      switch (currentId) {
        case "aircraft":
          const navigateToFlowAeralisResult = await Actions.navigateToFlow(context, {
            flow: 'aeralis',
            page: 'aeralis-create-airplane',
          });
          break;
        case 'system':
          const navigateToFlowAeralis2Result = await Actions.navigateToFlow(context, {
            flow: 'aeralis',
            page: 'aeralis-create-system',
          });
          break;
        case 'subsystem':
          const navigateToFlowAeralis3Result = await Actions.navigateToFlow(context, {
            flow: 'aeralis',
            page: 'aeralis-create-subsystem',
          });
          break;
        case 'component':
          const navigateToFlowAeralis4Result = await Actions.navigateToFlow(context, {
            flow: 'aeralis',
            page: 'aeralis-create-subsystemcomponent',
          });
          break;
        case 'home':
          const navigateToFlowAeralis5Result = await Actions.navigateToFlow(context, {
            flow: 'aeralis',
            page: 'aeralis-welcome',
          });
          break;
          default:
          break;
      }
    }
  }

  return InAppNavigationSpSelectionActionChain;
});
