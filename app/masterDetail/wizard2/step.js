define(['knockout'], function( ko ) {

    var Property = function( id, val ) {
        this.id = id;
        this.val = ko.observable(val);
    };

    var ctor = function( options ) {
        this._options = options || {};
        this.id = ko.observable();
        this.name = ko.observable();
        this.props = ko.observableArray([]);

        this.init(this._options)
    };

    ctor.prototype.init = function( options ) {

        this.id(options.id || '');
        this.name(options.name || '');

        this.props(createProperties(options.props));

        function createProperties (props) {
            var result = [];
            $.each(props, function( prop, val ) {
                result.push(new Property(prop, val));
            });

            return result;
        }

    };
    return ctor;

});