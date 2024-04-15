Ext.define("ModernApp.view.personnel.PersonnelViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.personnelviewcontroller",

  onEditCancelled: function (editor, value, startValue, eOpts) {
    const me = this;
    var user = Ext._find(value.record.store.config.data.items, {
      name: value.record.data.name,
    });
    Ext.Msg.confirm(
      "Confirm",
      value.record.data.name + ": " + user.phone + " is phone number",
      me.onConfirm("dasdadada"),
      this
    );
  },

  onConfirm: function (value) {
    alert(value);
  },
});
