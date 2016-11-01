<?php

namespace Drupal\advhello\Controller;

use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Controller\ControllerBase;

class AdvHelloController extends ControllerBase {
  public function page(Request $request) {
    $conf = \Drupal::config('advhello.settings');
    return array(
      '#type' => 'markup',
      '#markup' => $conf->get('t1').'<br/>'.$conf->get('t2').'<br/>'.$conf->get('t3').'<br/>',
    );
  }
}
