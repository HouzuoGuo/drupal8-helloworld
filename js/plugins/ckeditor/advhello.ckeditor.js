(function ($, Drupal, CKEDITOR) {
  'use strict';

  CKEDITOR.plugins.add('advhello', {
    init: function (editor) {
      editor.addCommand('insert_hello_world_text', {
        exec: CKEDITOR.advhello.mainDialog
      });
      editor.ui.addButton('InsertHelloTextButton', {
        label: 'Insert a HelloWorld text',
        command: 'insert_hello_world_text',
        icon: editor.config.PNGIcon
      });
    }
  });

  CKEDITOR.advhello = CKEDITOR.advhello || {
    mainDialog: function (editor) {
      alert('hello there');
    }
  };
})(jQuery, Drupal, CKEDITOR);
