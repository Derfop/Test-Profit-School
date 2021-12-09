<?php

$to = "komlev-k@mail.ru";
$tema = "Заявка с сайта";

$message = "Ваше имя: ".$_POST['name']."<br>";
$message .= "E-mail: ".$_POST['email']."<br>"; 
$message .= "Номер телефона: ".$_POST['tel']."<br>"; 

// $name = $_POST['name'];
// $email = $_POST['email'];
// $tel = $_POST['tel'];

// $name = htmlspecialchars($name);
// $email = htmlspecialchars($email);
// $tel = htmlspecialchars($tel);

// $name = urldecode($name);
// $email = urldecode($email);
// $tel = urldecode($tel);

// $name = trim($name);
// $email = trim($email);
// $tel = trim($tel);


// if (mail("komlev-k@mail.ru", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email. " Телефон: " .$tel , "From: example@mail.ru \r\n"))
// {
//     echo "сообщение успешно отправлено";

// } else {
//     echo "при отправке сообщения возникли ошибки";
// }


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
if (mail($to, $tema, $message, $headers)) {   

	echo "сообщение успешно отправлено";
} 
 
 
else 
 	{    echo "при отправке сообщения возникли ошибки"; 
}
?>