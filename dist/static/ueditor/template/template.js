UE.registerUI('dialogTemplate', function (editor, uiName) {
  var name = 'template'
  var btn = new UE.ui.Button({
    showIcon: false,
    label: ' 使用模板',
    name: name,
    title: '模版',
    onclick: function () {
      var dialog = new UE.ui.Dialog({
        iframeUrl: 'static/ueditor/template/template.html',
        editor: editor,
        name: 'template',
        title: "模板",
        cssRules: "width: " + 760 + "px;" + "height: " + 480 + "px;",
      });
      dialog.render();
      dialog.open();
    }
  });
  //当点到编辑内容上时，按钮要做的状态反射
  editor.addListener('selectionchange', function() {
    var state = editor.queryCommandState(name);
    if (state == -1) {
      btn.setDisabled(true);
      btn.setChecked(false);
    } else {
      btn.setDisabled(false);
      btn.setChecked(state);
    }
  });

  return btn;
});
