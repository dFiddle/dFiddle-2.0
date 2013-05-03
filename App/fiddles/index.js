define(['durandal/system', 'durandal/viewModel'],
  function (system, viewModel) {
  
  return {
    activeSample: viewModel.activator(),
    fiddles: [{
      name: 'friendly name Fiddle 01',
      hash: '#/fiddles/fiddle-01',
      moduleId: 'fiddles/fiddle-01/index'
    }, {
      name: 'friendly name  Fiddle 02',
      hash: '#/fiddles/fiddle-02',
      moduleId: 'fiddles/fiddle-02/index'
    }, {
      name: 'friendly name Fiddle 03',
      hash: '#/fiddles/fiddle-03',
      moduleId: 'fiddles/fiddle-03/index'
    }],
    activate: function (args) {
      var that = this;

      if (!args.name) {
        args.name = 'fiddle-01';
      }

      return system.acquire('fiddles/' + args.name + '/index').then(function (sample) {
        that.activeSample(sample);
      });
    }
  };
});