(function ($, Drupal, CKEDITOR) {
  'use strict';

  CKEDITOR.plugins.add('advhello', {
    init: function (editor) {
      editor.addCommand('insert_hello_world_text', {
        exec: CKEDITOR.advhello.insertTextDialog
      });
      editor.ui.addButton('InsertHelloTextButton', {
        label: 'Insert a HelloWorld text',
        command: 'insert_hello_world_text',
        icon: editor.config.PNGIcon
      });
    }
  });

  CKEDITOR.advhello = CKEDITOR.advhello || {
    insertTextDialog: function (editor) {
      var width = Math.min(500, parseInt(screen.availWidth * 0.4));
      var height = Math.min(300, parseInt(screen.availHeight * 0.3));
      var url = Drupal.url('advhello/choosetxt');
      url += (url.indexOf('?') === -1 ? '?' : '&') + 'sendto=CKEDITOR.advhello.insertText&ck_id=' + encodeURIComponent(editor.name);
      editor.popup(url, width, height);
    },

    insertText: function () {
    }
  };
})(jQuery, Drupal, CKEDITOR);
