requirejs.config({
    paths: {
      'text': '../lib/require/text',
      'durandal':'../lib/durandal/js',
      'plugins' : '../lib/durandal/js/plugins',
      'transitions' : '../lib/durandal/js/transitions',
      'knockout': '//ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',
      'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min'
    },
    shim: {
        'knockout': {
            exports: 'ko'
        },
        'jquery': {
            exports: '$'
        }
    }
});


define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Samples';
    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application.
        app.setRoot('shell');
    });
});