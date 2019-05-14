<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Usermodel extends CI_model {

  public function get_users()
  {
    $this->db->where('is_active', 1);
    $query = $this->db->get('users');
    return $query->result();
  }

  public function insert_users($userData)
  {
    $this->db->insert('users', $userData);
    return $this->db->insert_id();
  }
  public function login_mode($user_email){
    
      $query = $this->db->get_where('users',array("user_email"=>$user_email));
      return $query->row_array();
  }

  public function categories(){
    $q = $this->db->get('category');
    return $q->array_result();
  }
}

