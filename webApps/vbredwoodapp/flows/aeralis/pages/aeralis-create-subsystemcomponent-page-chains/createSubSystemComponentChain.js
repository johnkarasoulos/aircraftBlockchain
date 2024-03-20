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

  class createSubSystemComponentChain extends ActionChain {

    /**
     * Saves changes and creates new SubSystemComponent record.
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      // Sets the progress variable to true
      $page.variables.createSubSystemComponentChainInProgress = true;

      // Validates SubSystemComponent form
      const validateFormResult = await Actions.callChain(context, {
        chain: 'flow:validateFormChain',
        params: {
          validationGroupId: 'subSystemComponent-validation-group-1872746394-1',
        },
      }, { id: 'validateSubSystemComponent' });

      if (validateFormResult) {
        // Call REST creating new SubSystemComponent record
        const callRestCreateSubSystemComponentResult = await Actions.callRest(context, {
          endpoint: 'businessObjects/create_SubSystemComponent',
          body: $page.variables.subSystemComponent,
        }, { id: 'saveSubSystemComponent' });

        if (callRestCreateSubSystemComponentResult.ok) {
          // Fires a notification event about successful save
          await Actions.fireNotificationEvent(context, {
            summary: 'SubSystemComponent saved',
            message: 'SubSystemComponent record successfully created',
            displayMode: 'transient',
            type: 'confirmation',
          }, { id: 'fireSuccessNotification' });

          // Resets subSystemComponent variable to the default state
          await Actions.resetVariables(context, {
            variables: [
              '$page.variables.subSystemComponent',
            ],
          }, { id: 'resetSubSystemComponent' });
        } else {
          // Create error message
          const errorMessage = callRestCreateSubSystemComponentResult.body?.['o:errorDetails']?.[0]?.detail ||
                               `Could not create new SubSystemComponent: status ${callRestCreateSubSystemComponentResult.status}`;
          // Fires a notification event about failed save
          await Actions.fireNotificationEvent(context, {
              summary: 'Save failed',
              message: errorMessage,
          }, { id: 'fireErrorNotification' });
        }
      }

      // Sets the progress variable to false
      $page.variables.createSubSystemComponentChainInProgress = false;
    }
  }

  return createSubSystemComponentChain;
});
