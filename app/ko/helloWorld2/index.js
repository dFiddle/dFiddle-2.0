define(['knockout'], function (ko) {
    var firstName = ko.observable("updateMe");
    var lastName = ko.observable("meTooPlease");

    var fullName = ko.computed(function () {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return firstName() + " " + lastName();
    });

    return  {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        activate: activate
    };

    function activate(){
       firstName("Planet");
       lastName("Earth");
   }
});