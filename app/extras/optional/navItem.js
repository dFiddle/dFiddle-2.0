define(['plugins/router'], function( router ) {

    var ctor = function(options){
      this._options = options || {};
      this.init(this._options)
    };

    ctor.prototype.init = function(options){
        this.title = options.title;
        this.param = options.param;
        this.hash = '#extras/optional/' + this.param;
    };

    ctor.prototype.isActive = function(){
      return router.activeInstruction().fragment === this.hash.replace('#', '');
    };

    return ctor;
});