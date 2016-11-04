(function ($, Drupal) {
  'use strict';

  var advhello = window.advhello = {
    settings: {},
    ui_body: null
  };

  $(document).ready(function () {
    advhello.settings = window.drupalSettings && window.drupalSettings.test_settings;

    advhello.ui_body = document.createElement('div');
    document.body.appendChild(advhello.ui_body);

    advhello.ui_body.innerHTML = '<p>' + advhello.settings['hi_there'] + '</p>';
  });
})(jQuery, Drupal);
