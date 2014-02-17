/*globals define*/
define(function(require){
    "use strict";
    var ko = require('knockout'),
    searchCriteria = function () {
          var self = this;
          self.DeviceSerialNumber = ko.observable('');
          self.OrderNumber = ko.observable('');
          self.PosTranNumber = ko.observable('');
          self.EmailAddress = ko.observable('');
          self.SuspendedbarCode = ko.observable('');
          self.MobileNumber = ko.observable('');
      };

      return new searchCriteria();
});