function HandleForms() {
  var self = this;

  self.name = ko.observable("").extend({
    // validation: {
    //   message: "Length should be greater that 2",
    //   validator: function (value) {
    //     return value.length > 2;
    //   },
    // },
    required: true,
    minLength: 2,
  });

  self.email = ko.observable("").extend({
    email: true,
    required: true,
  });

  self.typeOfMemberShip = ko.observable("pro");

  self.handleSubmit = function () {
    var errors = ko.validation.group(self);
    if (errors().length > 0) {
      errors.showAllMessages();
      return;
    }
    var payload = {
      name: self.name(),
      email: self.email(),
      typeOfMemberShip: self.typeOfMemberShip(),
    };
    console.log("Submitting with the data", payload);
  };
}

ko.applyBindings(new HandleForms(), document.getElementById("root"));
