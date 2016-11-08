(function ($, Drupal) {
  'use strict';

  var advhello = window.advhello = {
    texts: {},
    ui_body: null,

    postT1: function () {
      window.parent.postMessage(advhello.texts[0], '*');
    },
    postT2: function () {
      window.parent.postMessage(advhello.texts[1], '*');
    },
    postT3: function () {
      window.parent.postMessage(advhello.texts[2], '*');
    }
  };

  $(document).ready(function () {
    advhello.texts = window.drupalSettings.texts;

    advhello.ui_body = document.createElement('div');
    document.body.appendChild(advhello.ui_body);

    advhello.ui_body.innerHTML = '<p><button onclick="advhello.postT1();">' + advhello.texts[0] + '</button></p>' +
      '<p><button onclick="advhello.postT2();">' + advhello.texts[1] + '</button></p>' +
      '<p><button onclick="advhello.postT3();">' + advhello.texts[2] + '</button></p>';
  });
})(jQuery, Drupal);
