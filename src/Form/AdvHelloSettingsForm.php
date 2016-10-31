<?php

namespace Drupal\advhello\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;
use Drupal\imce\Imce;

class AdvHelloSettingsForm extends EntityForm {
  public function form(array $form, FormStateInterface $form_state) {
    $conf = $this->getEntity();
    return parent::form($form, $form_state);
  }

  public function validateForm(array &$form, FormStateInterface $form_state) {
    return parent::validateForm($form, $form_state);
  }

  public function save(array $form, FormStateInterface $form_state) {
    $conf = $this->getEntity();
    $status = $imce_profile->save();
    drupal_set_message($this->t('all right!'));
  }
}
