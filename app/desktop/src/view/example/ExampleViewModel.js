Ext.define("ModernApp.view.example.ExampleViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.exampleviewmodel",

  formulas: {
    uppercaseName: function (get) {
      var name = get("name");
      return name.toUpperCase();
    },
  },
});
