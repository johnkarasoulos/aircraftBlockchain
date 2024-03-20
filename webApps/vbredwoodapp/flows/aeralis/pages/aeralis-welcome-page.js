define([], () => {
  'use strict';

  class PageModule {

    /**
     *
     * @param {String} arg1
     * @return {String}
     */
    setBody2RetrieveAllTokens(method1, arg1, bcCode) {
      arg1.splice(0, 0, method1);
      let payload = {
        "chaincode": bcCode,
        "sync": true,
        "timeout": 60000,
        "args": arg1
      };
      console.log("setBody2RetrieveAllTokens completed");
      return payload;
    }
  }
  
  return PageModule;
});
