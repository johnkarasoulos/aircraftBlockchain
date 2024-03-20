  require(["require", "exports", "ojs/ojbootstrap", "knockout", "ojs/ojknockout", "ojs/ojdrawerlayout", "ojs/ojbutton", "ojs/ojnavigationlist"], function (require, exports, ojbootstrap_1, ko) {
      "use strict";
      
      // Demo
      class DrawerDemoModel {
          constructor() {
              this.startOpened = ko.observable(false);
              this.startToggle = () => this.startOpened(!this.startOpened());
          }
      }
      // Bootstrap
      (0, ojbootstrap_1.whenDocumentReady)().then(() => {
          ko.applyBindings(new DrawerDemoModel(), document.getElementById('demo-container'));
      });
  });