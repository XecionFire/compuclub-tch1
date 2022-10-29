<?php
/**
 * ####################################################################
 * 
 * THIS TRAIT SETTING HTTP FLOW
 * 
 * @param Setting
 * 
 * ROUTING ON RECOURCES AND TEST
 * 
 * ####################################################################
 * */ 

trait Setting
{
  private $domain = "localhost";
  private $maintenance = false;
  private $test = false;

  public function info() 
  {
    $array["domain"] = $this->domain;
    $array["maintenance"] = $this->maintenance;
    $array["test"] = $this->test;
    return $array;
  }

}


