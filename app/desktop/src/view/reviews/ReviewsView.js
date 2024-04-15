Ext.define("ModernApp.view.reviews.ReviewsView", {
  extend: "Ext.Container",
  xtype: "reviewsView",
  controller: {
    type: "reviewsviewcontroller",
  },
  height: 400,
  layout: "fit",
  width: 600,

  items: [
    {
      xtype: "grid",
      shadow: "true",
      reference: "grid",
      deferEmptyText: false,
      emptyText: "Click a button to show a dataset",
    },
    {
      xtype: "toolbar",
      docked: "top",
      ui: "transparent",
      padding: "5 8",
      layout: {
        type: "hbox",
        align: "stretch",
      },
      defaults: {
        shadow: "true",
        ui: "action",
      },
      items: [
        {
          xtype: "segmentedbutton",
          width: 300,
          value: "Offices",
          defaults: {
            flex: 1,
            ui: "action",
          },
          items: [
            {
              text: "Show Offices",
              value: "Offices",
            },
            {
              text: "Show Employees",
              value: "Employees",
            },
          ],
          listeners: {
            change: "onChange",
          },
        },
      ],
    },
  ],

  etc: {
    Employees: {
      store: "createEmployeeStore",
      columns: [
        {
          text: "First Name",
          dataIndex: "forename",
        },
        {
          text: "Last Name",
          dataIndex: "surname",
        },
        {
          text: "Employee No.",
          dataIndex: "employeeNo",
          width: 100,
        },
        {
          text: "Department",
          dataIndex: "department",
          flex: 1,
        },
      ],
    },

    Offices: {
      store: "createOfficeStore",
      columns: [
        {
          text: "City",
          dataIndex: "city",
          flex: 1,
        },
        {
          text: "Total Employees",
          dataIndex: "totalEmployees",
          width: 140,
        },
        {
          text: "Manager",
          dataIndex: "manager",
          width: 120,
        },
      ],
    },
  },
});
