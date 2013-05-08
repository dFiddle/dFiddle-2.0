define(['durandal/plugins/router'], function (router) {
    
    return {
        router: router,
        activate: function () {
          router.map([
             
                { url: 'hello', moduleId: 'samples/hello/index', name: 'Hello World', visible: true },
                { url: 'hello/:name', moduleId: 'samples/hello/index', name: 'Examples' },

                { url: 'view-composition', moduleId: 'samples/viewComposition/index', name: 'View Composition', visible: true },
                { url: 'view-composition/:name', moduleId: 'samples/viewComposition/index', name: 'Examples' },

                { url: 'modal', moduleId: 'samples/modal/index', name: 'Modal Dialogs', visible: true },
                { url: 'modal/:name', moduleId: 'samples/modal/index', name: 'Examples' },

                { url: 'event-aggregator', moduleId: 'samples/eventAggregator/index', name: 'Events', visible: true },
                { url: 'event-aggregator/:name', moduleId: 'samples/eventAggregator/index', name: 'Examples' },

                { url: 'widgets', moduleId: 'samples/widgets/index', name: 'Widgets', visible: true },
                { url: 'widgets/:name', moduleId: 'samples/widgets/index', name: 'Examples' },

                { url: 'master-detail', moduleId: 'samples/masterDetail/index', name: 'Master Detail', visible: true },
                { url: 'master-detail/:name', moduleId: 'samples/masterDetail/index', name: 'Examples' },

                { url: 'knockout-samples/:name', moduleId: 'samples/knockout/index', name: 'Knockout Samples' },
                { url: 'knockout-samples', moduleId: 'samples/knockout/index', name: 'Knockout Samples', visible: true }
            ]);
            
          return router.activate('hello');
        }
    };
});