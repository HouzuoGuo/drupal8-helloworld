<?php

namespace Drupal\advhello\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * @CKEditorPlugin(
 *   id = "advhello",
 *   label = "Advanced HelloWorld Editor Plugin"
 * )
 */
class AdvHello extends CKEditorPluginBase {
  function getDependencies(Editor $editor) {
    return array();
  }

  public function getFile() {
    return drupal_get_path('module', 'advhello') . '/js/plugins/ckeditor/advhello.ckeditor.js';
  }

  public function getButtons() {
    return array(
      'InsertHelloTextButton' => array(
        'label' => 'Insert a HelloWorld text',
        'image' => drupal_get_path('module', 'advhello') . '/js/plugins/ckeditor/advhello-icon.png'
      )
    );
  }

  public function getConfig(Editor $editor) {
    return array(
      'PNGIcon' => file_create_url(drupal_get_path('module', 'advhello') . '/js/plugins/ckeditor/advhello-icon.png')
    );
  }
}

