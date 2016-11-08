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
    init_frame: function (editor) {
      // The chocie of text in frame will be inserted into this editor
      CKEDITOR.advhello.this_editor = editor;

      if (CKEDITOR.advhello.embed_div) {
        return;
      }
      var width = 500;
      var height = 300;
      // Construct a div element where iframe sits in
      var div = document.createElement('div');
      CKEDITOR.advhello.embed_div = div;
      div.id = 'frame_div';
      div.style.position = "fixed";
      div.style.width = width + "px";
      div.style.height = height + "px";
      div.style.background = "#fff";
      div.style.padding = "0";
      div.style.top = "50%";
      div.style.marginTop = "-" + (height/2) + "px";
      div.style.left = "50%";
      div.style.marginLeft = "-" + (width/2) + "px";
      div.style.zIndex = "9999";
      div.style.boxShadow = "0px 0px 14px 0px rgba(50, 50, 50, 0.75)";
      div.style.display = "none";

      // BaseURL already contains the first segment of Drupal.url return value
      var path = Drupal.url('advhello/choosetxt');
      path = path.substring(path.substring(1).indexOf('/') + 1);
      var url = editor.config.BaseURL + path;
      div.innerHTML = '<button onclick="CKEDITOR.advhello.closeFrame();">Close</button>' +
        '<iframe id="frame" src="' + url + '" width="' + width + 'px" height="' + height + 'px"></iframe>';

      // Place the div element
      if (document.body.firstChild) {
        document.body.insertBefore(div, document.body.firstChild);
      } else {
        document.body.appendChild(div);
      }

      // Listen for text choice message from iframe
      if (window.addEventListener) {
        window.addEventListener('message', CKEDITOR.advhello.frameMessage, true);
      } else {
        window.attachEvent('message', CKEDITOR.advhello.frameMessage, true);
      }
    },

    frameMessage: function (ev) {
      alert('Will insert ' + ev.data);
      CKEDITOR.advhello.closeFrame();
      var editor = CKEDITOR.advhello.this_editor;
      editor.insertHtml(ev.data + '<br />');
    },

    closeFrame: function () {
      CKEDITOR.advhello.embed_div.style.display = 'none';
    },

    insertTextDialog: function (editor) {
      CKEDITOR.advhello.init_frame(editor);
      CKEDITOR.advhello.embed_div.style.display = 'block';
    }
  };
})(jQuery, Drupal, CKEDITOR);
