define(['plugins/router'], function (router) {

    // Redirecting from / to first route
    router.guardRoute = function(routeInfo, params, instance){
        if (params.fragment === ''){
            return routeInfo.router.routes[0].hash;
        }
        return true;
    };

    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', moduleId: 'hello/index', title: 'Hello World' },
                { route: 'hello*details', hash: '#hello', moduleId: 'hello/index', title: 'Hello World', nav: 1 },
                { route: 'view-composition*details', hash:'#view-composition', moduleId: 'viewComposition/index', title: 'View Composition', nav: true },
                { route: 'modal*details', hash: '#modal', moduleId: 'modal/index', title: 'Modal Dialogs', nav: 3 },
                { route: 'event-aggregator*details', hash: '#event-aggregator', moduleId: 'eventAggregator/index', title: 'Events', nav: 2 },
                { route: 'widgets*details', hash:'#widgets',  moduleId: 'widgets/index', title: 'Widgets', nav: true },
                { route: 'master-detail*details', hash: '#master-detail', moduleId: 'masterDetail/index', title: 'Master Detail', nav: true },
                { route: 'knockout-samples*details', hash: '#knockout-samples', moduleId: 'ko/index', title: 'Knockout Samples', nav: true },
                { route: 'extras*details', hash: '#extras', moduleId: 'extras/index', title: 'Extras', nav: true,  admin: true  }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});