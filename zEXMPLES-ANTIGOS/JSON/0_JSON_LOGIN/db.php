<?php

header('Cache-Control: no-cache, must-revalidate');
header('Content-Type: application/json; charset=utf-8');

$user = json_decode($_POST['json'], true);
$consulta = select_login($user['login'], $user['senha']);
echo json_encode($consulta);


//========================================================\\

function get_con_db(){
  $con = new PDO('mysql:dbname=json; host=localhost; charset=utf8','root','');
  $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $con;
}

function select_login($login, $senha) {
  $sql = get_con_db()->prepare("SELECT * FROM usuario WHERE login=? AND senha=?;");
  $sql->execute([$login, $senha]);
  return $sql->fetch(PDO::FETCH_ASSOC);
}

function insert_usuario($nome, $login, $senha) {
  $sql = get_con_db()->prepare("INSERT INTO usuario (nome, login, senha) VALUES (?,?,?);");
  $sql->execute([$nome, $login, $senha]);
}
