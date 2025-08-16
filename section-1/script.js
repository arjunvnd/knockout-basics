function Counter() {
  var self = this;
  self.count = ko.observable(0);

  self.increment = function () {
    var currentCount = self.count();
    self.count(currentCount + 1);
  };
  self.decrement = function () {
    var currentCount = self.count();
    if (currentCount <= 0) return;
    self.count(currentCount - 1);
  };

  dogMood = ko.computed(function () {
    if (self.count() > 0) {
      return "Happy";
    }
    return "Sad";
  });
}

ko.applyBindings(new Counter(), document.querySelector("#root"));
