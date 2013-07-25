define(['./tab', 'plugins/widget', 'knockout'], function (Tab, widget, ko) {

    return {
        tabs: ko.observableArray([
            new Tab('Durandal', 'A cross-device, cross-platform application framework written in JavaScript, Durandal is a very small amount of code built on top of three existing and established Javascript libraries: jQuery, Knockout and RequireJS.', true),
            new Tab('UnityDatabinding', 'A general databinding framework for Unity3D. Includes bindings for UI composition and samples for the NGUI library.'),
            new Tab('Caliburn.Micro', 'Caliburn.Micro is a small, yet powerful framework, designed for building applications across all Xaml Platforms. With strong support for MVVM and other proven UI patterns, Caliburn.Micro will enable you to build your solution quickly, without the need to sacrifice code quality or testability.')
        ]),
        addNewTab: function() {
            this.tabs.push(new Tab('New Tab ', 'A test tab.'));
        }
    };
});