define(['plugins/router', 'global', 'knockout'], function( router, global, ko ) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId: 'masterDetail',
            route: 'master-detail'
        }).map([
            {
                type: 'intro',
                title: 'Master Detail',
                route: ['', 'default'],
                moduleId: 'default/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'Master Detail',
                route: 'dFiddle',
                moduleId: 'dFiddle/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'Wizard',
                route: 'wizard',
                moduleId: 'wizard/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'Wizard2',
                route: 'wizard2',
                moduleId: 'wizard2/index',
                nav: true
            },
            {
                type: 'fiddle',
                title: 'so19719038',
                route: 'so19719038',
                moduleId: 'so19719038/index',
                nav: true
            }

        ])
        .buildNavigationModel();

    childRouter.on('router:navigation:complete').then(global.createSampleLink);

    return {
        global: global,
        router: childRouter,
        getItemsByCategoryId: function( categoryId ) {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function( route ) {
                return route.type === categoryId;
            });
        }
    };
});