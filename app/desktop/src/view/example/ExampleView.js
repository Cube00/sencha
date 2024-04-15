Ext.define("ModernApp.view.example.ExampleView", {
  extend: "Ext.Container",
  layout: "fit",
  xtype: "exampleview",
  requires: [
    "ModernApp.view.example.ExampleViewModel",
    "ModernApp.view.example.ExampleViewController",
  ],
  viewModel: {
    type: "exampleviewmodel",
  },

  items: [
    {
      extend: "Ext.grid.Panel",
      xtype: "grid",
      store: {
        type: "exampleviewstore",
        listeners: {
          load: function (store, records, successful, operation, eOpts) {
            console.log("Store loaded:", records);
          },
        },
      },
      controller: {
        type: "exampleviewcontroller",
      },

      items: [
        {
          xtype: "toolbar",
          dock: "top",
          items: [
            {
              text: "Filter Name A",
              handler: function () {
                var grid = this.up("grid"); // Get the grid
                var store = grid.getStore(); // Get the store
                store.filter("name", "A"); // Filter where 'name' contains 'A'
              },
            },
            {
              text: "Filter Name B",
              handler: function () {
                var grid = this.up("grid"); // Get the grid
                var store = grid.getStore(); // Get the store
                store.filter("name", "B"); // Filter where 'name' contains 'B'
              },
            },
            {
              text: "Clear Filters",
              handler: function () {
                var grid = this.up("grid"); // Get the grid
                var store = grid.getStore(); // Get the store
                store.clearFilter(); // Clear all filters
              },
            },
            {
              xtype: "textfield",
              fieldLabel: "Filter Name",
              labelWidth: 100, // optional
              listeners: {
                change: "onNameFilterChange", // bind change event to a handler function
              },
            },
          ],
        },
      ],
      columns: [
        {
          text: "Name",
          dataIndex: "name",
          renderer: function (value) {
            var viewModel = this.up("grid").lookupViewModel();
            viewModel.set("name", value);
            return viewModel.get("uppercaseName");
          },
        },
      ],
    },
  ],
});
