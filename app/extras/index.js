define(['plugins/router', 'durandal/system', 'global', 'knockout'], function( router, system, global, ko ) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId: 'extras',
            route: 'extras'
        }).map([
            {
                type: 'fiddle',
                title: 'Tabs',
                route: ['', 'default'],
                moduleId: 'default/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'Navigation',
                route: 'optional(/:id)',
                hash: '#extras/optional',
                moduleId: 'optional/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'inPageNavigation',
                route: 'welcome(/:id)',
                hash: '#extras/welcome',
                moduleId: 'inPage/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'mixin',
                route: 'mixin',
                hash: '#extras/mixin',
                moduleId: 'mixin/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'mixin2',
                route: 'mixin2(/:id)',
                hash: '#extras/mixin2',
                moduleId: 'mixin2/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'scope before',
                route: 'scope',
                hash: '#extras/scope',
                moduleId: 'scope/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'scope ctor',
                route: 'scope/ctor',
                hash: '#extras/scope/ctor',
                moduleId: 'scope/ctor',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'so19551060',
                route: 'scope/ctor',
                hash: '#extras/scope/ctor',
                moduleId: 'scope/ctor',
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
