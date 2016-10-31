<?php

namespace Drupal\advhello\Controller;

use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Controller\ControllerBase;

class AdvHelloController extends ControllerBase {
  public function page(Request $request) {
    return array(
      '#type' => 'markup',
      '#markup' => $this->t('This is an advanced HelloWorld.'),
    );
  }

  public function settings(Request $request) {
    return array(
      '#type' => 'markup',
      '#markup' => $this->t('This is an advanced HelloWorld settings.'),
    );
  }
}
