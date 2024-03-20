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

  class createSubSystemsChain extends ActionChain {

    /**
     * Saves changes and creates new SubSystems record.
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      // Sets the progress variable to true
      $page.variables.createSubSystemsChainInProgress = true;

      // Validates SubSystems form
      const validateFormResult = await Actions.callChain(context, {
        chain: 'flow:validateFormChain',
        params: {
          validationGroupId: 'subSystems-validation-group-149363037-1',
        },
      }, { id: 'validateSubSystems' });

      if (validateFormResult) {
        // Call REST creating new SubSystems record
        const callRestCreateSubSystemsResult = await Actions.callRest(context, {
          endpoint: 'businessObjects/create_SubSystems',
          body: $page.variables.subSystems,
        }, { id: 'saveSubSystems' });

        if (callRestCreateSubSystemsResult.ok) {
          // Fires a notification event about successful save
          await Actions.fireNotificationEvent(context, {
            summary: 'SubSystems saved',
            message: 'SubSystems record successfully created',
            displayMode: 'transient',
            type: 'confirmation',
          }, { id: 'fireSuccessNotification' });

          // Resets subSystems variable to the default state
          await Actions.resetVariables(context, {
            variables: [
              '$page.variables.subSystems',
            ],
          }, { id: 'resetSubSystems' });
        } else {
          // Create error message
          const errorMessage = callRestCreateSubSystemsResult.body?.['o:errorDetails']?.[0]?.detail ||
                               `Could not create new SubSystems: status ${callRestCreateSubSystemsResult.status}`;
          // Fires a notification event about failed save
          await Actions.fireNotificationEvent(context, {
              summary: 'Save failed',
              message: errorMessage,
          }, { id: 'fireErrorNotification' });
        }
      }

      // Sets the progress variable to false
      $page.variables.createSubSystemsChainInProgress = false;
    }
  }

  return createSubSystemsChain;
});
