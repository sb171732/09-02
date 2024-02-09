<?php
header('Access-Control-Allow-Origin: http://localhost:8080');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");


// connect to mysql
$user = 'root'; // ваш пользователь
$password = ''; // ваш пароль
$db = 'users'; // имя вашей базы данных 
$host = 'localhost'; // локальный хост
$charset = 'utf8'; // нужная кодировка

$pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $password);


if (isset($_GET['get_users'])){
    $query = $pdo -> query('SELECT * FROM users');
    $arr = [];
    while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
        $arr[] = $row;
    }
    echo json_encode($arr);
}
if (isset($_GET['get_counter'])){
    $query = $pdo -> query('SELECT * FROM counter where id =1');
    $arr = [];
    while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
        $arr[] = $row;
    }
    echo ($arr[0]['counter']);
}
if (isset($_GET['save_counter'])){
    $query = $pdo -> query('update from counter set counter = '.$_GET['save_counter'].' where id =1');
    
}





