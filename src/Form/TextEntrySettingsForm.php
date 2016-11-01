<?php

namespace Drupal\advhello\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class TextEntrySettingsForm extends ConfigFormBase {
  public function getFormId() {
    return 'advhello_settings';
  }

  protected function getEditableConfigNames() {
    return 'advhello.settings';
  }

  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('advhello.settings');
    $form['t1'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('HelloWorld text choice 1'),
      '#default_value' => $config->get('t1'),
    );  
    $form['t2'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('HelloWorld text choice 2'),
      '#default_value' => $config->get('t2'),
    );  
    $form['t3'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('HelloWorld text choice 3'),
      '#default_value' => $config->get('t3'),
    );  
    return parent::buildForm($form, $form_state);
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = \Drupal::service('config.factory')->getEditable('advhello.settings');
    $config->set('t1', $form_state->getValue('t1'))->save();
    $config->set('t2', $form_state->getValue('t2'))->save();
    $config->set('t3', $form_state->getValue('t3'))->save();
    parent::submitForm($form, $form_state);
  }
}
