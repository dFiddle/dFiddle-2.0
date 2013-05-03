requirejs.config({
    paths: {
      'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.3/text.min'
    }
});

define(['durandal/app', 'durandal/system', 'durandal/viewLocator'],
  function (app, system, viewLocator) {
    
    system.debug(true);
    
    app.title = 'Durandal Samples';
    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        app.adaptToDevice();
        app.setRoot('samples/shell');
    });
});