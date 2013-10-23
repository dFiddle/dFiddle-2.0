define(['plugins/router', 'durandal/system', 'global', 'knockout'], function( router, system, global, ko ) {
    var childRouter = router.createChildRouter()
      .makeRelative({
          moduleId: 'hello',
          route: 'hello'
      }).map([
          {route: ['', 'default'], moduleId: 'default/index', title: 'Hello World', type: 'intro', nav: true},
          {route: 'dFiddle', moduleId: 'dFiddle/index', title: 'Hello World', type: 'fiddle', nav: true}
      ]).buildNavigationModel();
      
    // .on is mixed in an not meant to be  chainable 
    childRouter.on('router:navigation:complete').then(global.createSampleLink);

    return {
        global: global,
        router: childRouter,
        getItemsByCategoryId: function( categoryId ) {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function( route ) {
                return route.type === categoryId;
            });
        },
        binding: function() {
            system.log('Lifecycle : binding : hello/index');
            return { cacheViews: false }; //cancels view caching for this module, allowing the triggering of the detached callback
        }
    };
});
