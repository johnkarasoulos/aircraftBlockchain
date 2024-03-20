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

  class createColonialViperChain extends ActionChain {

    /**
     * Saves changes and creates new ColonialViper record.
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      // Sets the progress variable to true
      $page.variables.createColonialViperChainInProgress = true;

      // Validates ColonialViper form
      const validateFormResult = await Actions.callChain(context, {
        chain: 'flow:validateFormChain',
        params: {
          validationGroupId: 'colonialViper-validation-group--496789698-1',
        },
      }, { id: 'validateColonialViper' });

      if (validateFormResult) {
        // Call REST creating new ColonialViper record
        const callRestCreateColonialViperResult = await Actions.callRest(context, {
          endpoint: 'businessObjects/create_ColonialViper',
          body: $page.variables.colonialViper,
        }, { id: 'saveColonialViper' });

        if (callRestCreateColonialViperResult.ok) {
          // Fires a notification event about successful save
          await Actions.fireNotificationEvent(context, {
            summary: 'ColonialViper saved',
            message: 'ColonialViper record successfully created',
            displayMode: 'transient',
            type: 'confirmation',
          }, { id: 'fireSuccessNotification' });

          // Resets colonialViper variable to the default state
          await Actions.resetVariables(context, {
            variables: [
              '$page.variables.colonialViper',
            ],
          }, { id: 'resetColonialViper' });
        } else {
          // Create error message
          const errorMessage = callRestCreateColonialViperResult.body?.['o:errorDetails']?.[0]?.detail ||
                               `Could not create new ColonialViper: status ${callRestCreateColonialViperResult.status}`;
          // Fires a notification event about failed save
          await Actions.fireNotificationEvent(context, {
              summary: 'Save failed',
              message: errorMessage,
          }, { id: 'fireErrorNotification' });
        }
      }

      // Sets the progress variable to false
      $page.variables.createColonialViperChainInProgress = false;
    }
  }

  return createColonialViperChain;
});
