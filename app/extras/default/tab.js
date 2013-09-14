define(['durandal/events', 'knockout'], function(events, ko) {
    return function(name, content, isActive) {
        this.isActive = ko.observable(isActive || false);
        this.name = name;
        this.content = content;
    };
});