define(['plugins/router', 'durandal/system', 'global', 'knockout'], function( router, system, global, ko ) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId: 'so',
            route: 'so'
        }).map([
            {
                type: 'intro',
                title: 'Default',
                route: ['', 'default'],
                moduleId: 'default/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'so19551060',
                route: '19551060',
                moduleId: '19551060/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'so19857807',
                route: '19857807',
                moduleId: '19857807/index',
                nav: true
            }
        ])
        .buildNavigationModel();

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
