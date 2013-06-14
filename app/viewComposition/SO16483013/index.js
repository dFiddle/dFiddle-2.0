define(['knockout'], function(ko) {

  var role = ko.observable('role2');

  return {
    showCodeUrl: true,
    role: role,
    viewUrl: viewUrl(),
    propertyOne: 'This is a databound property from the root context.',
    propertyTwo: 'This property demonstrates that binding contexts flow through composed views.'
  };

 function viewUrl(){
     this.role = (role() || 'default');

         var roleViewMap = {
           'default': 'viewComposition/SO16483013/index.html',
           role1: 'viewComposition/SO16483013/role1.html',
           role2: 'viewComposition/SO16483013/role2.html'
         };

         return roleViewMap[this.role];
   }


});