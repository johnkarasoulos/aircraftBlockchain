define([], () => {
  'use strict';

  class PageModule {

    /**
     *
     * @param {String} arg1
     * @return {String}
     */
    scapedStr(arg1) {
      var reply1 = JSON.stringify(arg1);
      return reply1;
    }

    /**
     *
     * @param {String} arg1
     * @return {String}
     */
    prepareData4CreateSubSystem(method, args, bcCode) {
      var arg1 = [];
      arg1[0] = method;
      arg1[1] = args;
      arg1[2] = "1";
      let payload = {
        "chaincode": bcCode,
        "sync": true,
        "timeout": 60000,
        "args": arg1
      };
      console.log("prepareData4CreateSubSystem completed");
      return payload;
    }
  }

  return PageModule;
});
