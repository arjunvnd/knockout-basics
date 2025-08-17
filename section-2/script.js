function DogToy() {
  var self = this;
  var toysMasterList = [
    { id: "1", name: "Bone" },
    { id: "2", name: "Chew Toy" },
    { id: "3", name: "Car" },
    { id: "4", name: "Person" },
  ];
  self.inventory = ko.observableArray([]);

  self.addToy = function () {
    const randomIndex = Math.floor(Math.random() * 4);
    self.inventory.push(toysMasterList[randomIndex]);
  };

  self.removeToy = function (data, e) {
    self.inventory.splice(e.target.getAttribute("item-index"), 1);
  };
}

ko.applyBindings(new DogToy(), document.querySelector("#root"));
