<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UserController extends CI_Controller
{
    
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Usermodel');
    }
    
    public function users()
    {
        header("Access-Control-Allow-Origin: *");
        $users = $this->Usermodel->get_users();
        
        $this->output->set_content_type('application/json')->set_output(json_encode($users));
    }
    
    
    
    public function insertUsers()
    {
        
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
        $formdata = json_decode(file_get_contents('php://input'), true);
        if (!empty($formdata)) {
            
            $UserName   = $formdata['UserName'];
            $user_email = $formdata['user_email'];
            $Password   = $formdata['Password'];
            
            $userData = array(
                'UserName' => $UserName,
                'user_email' => $user_email,
                // 'Password' => ppassword_hash() assword_hash($Password,PASSWORD_DEFAULT),
                'Password' => password_hash($Password, PASSWORD_DEFAULT),
                'is_active' => 1,
                'created_at' => date('Y-m-d H', time())
            );
            
            $id = $this->Usermodel->insert_users($userData);
            
            $response = array(
                'status' => 'success',
                'message' => 'User Register successfully'
            );
        } else {
            $response = array(
                'status' => 'error'
            );
        }
        
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    }
    
    
    
    
    public function login()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
        
        
        //validate the form
        $this->form_validation->set_rules("user_email", 'user_email', 'required');
        $this->form_validation->set_rules("Password", 'Password', 'required');
        
        if ($this->form_validation->run() === false) {
            //form is empty
            $response = array(
                "status" => 'Error',
                'message' => validation_errors()
            );
            
        } else {
            
            $user_email = $this->input->post('user_email');
            $Password   = $this->input->post('Password');
            
            $row = $this->Usermodel->login_mode($user_email);
            
            //verify Password
            
            if (count($row) > 0) {
                
                //if we have results then verify user
                if (password_verify($Password, $row['Password'])) {
                    
                    $response = array(
                        'status' => 'Success',
                        'message' => "Loggedin successfully"
                    );
                    
                } else {
                    
                    $response = array(
                        'status' => 'Error',
                        'message' => 'Username and Password does not match'
                    );
                }
            } else {
                
                $response = array(
                    'status' => 'Error',
                    'message' => "Invalid user account"
                );
            }
        }
        
        $this->output->set_content_type('application/json')->set_output(json_encode($response));
    }
    
    public function category()
    {
        $category = $this->Usermodel->categories();
        $this->output->set_content_type('application/json')->set_output(json_encode($category));
    }
    
}