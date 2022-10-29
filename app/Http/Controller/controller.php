<?php

/**
 * ####################################################################
 * 
 * THIS CLASS FOR CONTROLLER THE URL
 * 
 * ROUTING ON RECOURCES
 * 
 * GET IMG,CSS,JS & Other FROM PUBLIC FILES
 * 
 * ####################################################################
 * */ 


class Controller {

  use Setting;

  public $folder = "routes";
  public $template = false;
  public $template_name = "";

  public function run() {
    switch ($this->maintenance) {
      case true:
        # Maintenance...
        break;
        
        default:
        # Tidak Maintenance...
        break;
    }
  }

}

/**
 * ####################################################################
 * 
 * THIS CLASS FOR HANDLING THE UNIT TEST
 * 
 * ROUTING ON TESTS
 * 
 * CAN IMG,CSS,JS & Other FROM PUBLIC FILES
 * 
 * ####################################################################
 * */ 


class UnitTest {

  use Setting;

  public function run()
  {
    switch ($this->test) {
      case true:
        # Test Mode Actuve...
        var_dump  ($this->info());

        break;
        
        default:
        # Test Mode Nonactive...
        $controller_Definer = new Controller;
        $controller_Definer->run();
        break;
    }
  }

}
 
/**
 * 
 * CALLING THE UnitTest Class TO TRIGGER THE CONTROLLER CLASS
 * 
 * */ 

$unit_Test_Definer = new UnitTest();
$unit_Test_Definer->run();