<?php

namespace Drupal\advhello\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Drupal\Core\Controller\ControllerBase;

class AdvHelloController extends ControllerBase {
  public function displayTxt(Request $request) {
    $conf = \Drupal::config('advhello.settings');
    return array(
      '#type' => 'markup',
      '#markup' => $conf->get('t1').'<br/>'.$conf->get('t2').'<br/>'.$conf->get('t3').'<br/>',
    );
  }

  public function chooseTxt(Request $request) {
    $page = array();
    $page['#attached']['library'][] = 'advhello/drupal.advhello';
    $page['#attached']['drupalSettings']['test_settings'] = array('hi_there' => '123');
    $content = \Drupal::service('bare_html_page_renderer')->renderBarePage($page, 'Choose Text', '', array('#show_messages' => FALSE))->getContent();
    return new Response($content);
   
  }
}
