Ext.define("ModernApp.view.example.ExampleViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.exampleviewcontroller",

  onNameFilterChange: function (textfield, newValue, oldValue, eOpts) {
    var grid = this.getView();
    var store = grid.getStore();
    store.clearFilter(); // Clear existing filters
    if (newValue) {
      // Apply new filter based on the entered value
      store.filter("name", "newValue");
    }
  },
});
