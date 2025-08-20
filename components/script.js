function ListsViewModel() {
  var self = this;

  self.heading = ko.observable("Showing the list of items");
  self.listOfItem = ko.observableArray([]);

  self.getData = function (cb) {
    const mockData = ["this", "is", "a", "test"];
    setTimeout(() => {
      cb(mockData);
    }, 1000);
  };
  self.setData = function (data) {
    self.listOfItem(data);
  };
}

ko.components.register("loading-button", {
  viewModel: function (params) {
    var self = this;
    self.isLoading = ko.observable(false);
    self.buttonText = ko.computed(function () {
      return self.isLoading() ? "Loading..." : params.buttonText;
    });

    self.handleClick = function () {
      self.isLoading(true);
      params.handleClick(function (data) {
        self.isLoading(false);
        params.afterClick(data);
      });
    };
  },
  template: `
    <button data-bind="click: handleClick">
      <span data-bind="text: buttonText()"></span>
    </button>
     `,
});

ko.applyBindings(new ListsViewModel(), document.getElementById("root"));
