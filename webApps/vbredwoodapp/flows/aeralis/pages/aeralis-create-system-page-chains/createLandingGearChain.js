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

  class createLandingGearChain extends ActionChain {

    /**
     * Saves changes and creates new LandingGear record.
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      // Sets the progress variable to true
      $page.variables.createLandingGearChainInProgress = true;

      // Validates LandingGear form
      const validateFormResult = await Actions.callChain(context, {
        chain: 'flow:validateFormChain',
        params: {
          validationGroupId: 'landingGear-validation-group-1661534619-1',
        },
      }, { id: 'validateLandingGear' });

      if (validateFormResult) {
        // Call REST creating new LandingGear record
        const callRestCreateLandingGearResult = await Actions.callRest(context, {
          endpoint: 'businessObjects/create_LandingGear',
          body: $page.variables.landingGear,
        }, { id: 'saveLandingGear' });

        if (callRestCreateLandingGearResult.ok) {
          // Fires a notification event about successful save
          await Actions.fireNotificationEvent(context, {
            summary: 'LandingGear saved',
            message: 'LandingGear record successfully created',
            displayMode: 'transient',
            type: 'confirmation',
          }, { id: 'fireSuccessNotification' });

          // Resets landingGear variable to the default state
          await Actions.resetVariables(context, {
            variables: [
              '$page.variables.landingGear',
            ],
          }, { id: 'resetLandingGear' });
        } else {
          // Create error message
          const errorMessage = callRestCreateLandingGearResult.body?.['o:errorDetails']?.[0]?.detail ||
                               `Could not create new LandingGear: status ${callRestCreateLandingGearResult.status}`;
          // Fires a notification event about failed save
          await Actions.fireNotificationEvent(context, {
              summary: 'Save failed',
              message: errorMessage,
          }, { id: 'fireErrorNotification' });
        }
      }

      // Sets the progress variable to false
      $page.variables.createLandingGearChainInProgress = false;
    }
  }

  return createLandingGearChain;
});
