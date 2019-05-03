<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class UserController extends CI_Controller {
  public function __construct()
  {
    parent::__construct();
    $this->load->model('Usermodel');
  }

  public function users()
  {
    header("Access-Control-Allow-Origin: *");
    $users = $this->Usermodel->get_users();

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($users));
  }



  public function insertUsers()
  {

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
    $formdata = json_decode(file_get_contents('php://input'), true);
    if( ! empty($formdata)) {

      $UserName = $formdata['UserName'];
      $user_email = $formdata['user_email'];
      $Password = $formdata['Password'];

      $userData = array(
        'UserName' => $UserName,
        'user_email' => $user_email,
        // 'Password' => ppassword_hash() assword_hash($Password,PASSWORD_DEFAULT),
         'Password' => password_hash($Password,PASSWORD_DEFAULT) ,
         'is_active' => 1,
        'created_at' => date('Y-m-d H', time())
      );

      $id = $this->Usermodel->insert_users($userData);

      $response = array(
        'status' => 'success',
        'message' => 'User Register successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }




  public function login()
  {
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

      $user_email = $this->input->post('user_email');
      $Password   = $this->input->post('Password');

      $row = $this->Usermodel->login_mode($user_email);
      var_dump( $row);
      if (count($row) > 0) {
          //verify password

          if (password_verify($Password, $row['Password'])) {

              $response = array(
                  "status" => 'success',
                  'message' => "User Login successfully"
              );
          } else {

              $response = array(
                  "status" => 'error',
                  'message' => "Password and Username does not match"
              );
          }

      } else {

          $response = array(
              "status" => 'error',
              'message' => 'Account does not exist'
          );

      }

      $this->output->set_content_type('application/json')->set_output(json_encode($response));
  }

// public function login(){
//   header("Access-Control-Allow-Origin: *");
//   header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
//
//   $user_email = $this->input->post('user_email');
//   $Password   = $this->input->post('Password');
//
//   $query = $this->Usermodel->login_mode($user_email,$Password);
//
//   if(!empty($query)){
//     $response = array(
//       'status' => 'success',
//       'message' => 'User Login successfully'
//     );
//   }
//   else
//   {
//     $response = array(
//       'status' => 'email and password is incorrect',
//     );
//   }
//   $this->output
//     ->set_content_type('application/json')
//     ->set_output(json_encode($response));
//  }
public function category(){
  $category= $this->Usermodel->categories();
  $this->output
    ->set_content_type('application/json')
    ->set_output(json_encode($category));
}

}

