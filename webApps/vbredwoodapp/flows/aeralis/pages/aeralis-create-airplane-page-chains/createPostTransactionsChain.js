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

    class createPostTransactionsChain extends ActionChain {

        /**
         * @param {Object} context
         */
        async run(context) {
            const { $page, $flow, $application } = context;

            // Sets the progress variable to true
            $page.variables.createPostTransactionsChainInProgress = true;

            // Validates postTransactions form
            const validateFormResult = await Actions.callChain(context, {
                chain: 'flow:validateFormChain',
                params: {
                    validationGroupId: 'postTransactions-validation-group--496789698-1',
                },
            }, { id: 'validatePostTransactions' });

            if (validateFormResult) {
                // Call REST creating new postTransactions record
                const callRestCreatePostTransactionsResult = await Actions.callRest(context, {
                    endpoint: 'createAirplane/postTransactions',
                    body: $page.variables.postTransactions,
                }, { id: 'savePostTransactions' });

                if (callRestCreatePostTransactionsResult.ok) {
                    // Fires a notification event about successful save
                    await Actions.fireNotificationEvent(context, {
                        summary: 'postTransactions saved',
                        message: 'postTransactions record successfully created',
                        displayMode: 'transient',
                        type: 'confirmation',
                    }, { id: 'fireSuccessNotification' });

                    // Resets postTransactions variable to the default state
                    await Actions.resetVariables(context, {
                        variables: [
                            '$page.variables.postTransactions',
                        ],
                    }, { id: 'resetPostTransactions' });

                    // Resets the dynamic form by updating its display value using the value attribute. User entered values will be erased.
                    await Actions.callComponentMethod(context, {
                        selector: '#oj-dynamic-form--496789698-1',
                        method: 'reset',
                    }, { id: 'resetDynamicForm' });
                } else {
                    // Create error message
                    const errorMessage = callRestCreatePostTransactionsResult.body?.['o:errorDetails']?.[0]?.detail ||
                                         `Could not create new postTransactions: status ${callRestCreatePostTransactionsResult.status}`;
                    // Fires a notification event about failed save
                    await Actions.fireNotificationEvent(context, {
                        summary: 'Save failed',
                        message: errorMessage,
                    }, { id: 'fireErrorNotification' });
                }
            }

            // Sets the progress variable to false
            $page.variables.createPostTransactionsChainInProgress = false;
        }
    }

    return createPostTransactionsChain;
});
