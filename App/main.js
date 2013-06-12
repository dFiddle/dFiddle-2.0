requirejs.config({
    paths: {
      'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.3/text.min',
      'plugins' : '../lib/durandal/js/plugins',
      'transitions' : '../lib/durandal/js/transitions'
    }
});


define(['../lib/durandal/js/durandal'], function(){
    require(['bootstrapper']);
});