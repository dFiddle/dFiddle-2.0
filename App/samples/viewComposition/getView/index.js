define(function() {

  var roles = ['default', 'role1', 'role2'];
  var role = ko.observable('default');

  var getView = ko.computed(function(){
        var roleViewMap = {
          'default': 'samples/viewComposition/getView/index.html',
          role1: 'samples/viewComposition/getView/role1.html',
          role2: 'samples/viewComposition/getView/role2.html'
        };

        this.role = (role() || 'default');

        return roleViewMap[this.role];
  });


  return {
    showCodeUrl: true,
    roles: roles,
    role: role,
    getView: getView,
    propertyOne: 'This is a databound property from the root context.',
    propertyTwo: 'This property demonstrates that binding contexts flow through composed views.'
  };


});