<?php
if(isset($_POST['submit'])){
$name=$_POST['nombre'];
$email=$_POST['email'];
$phone=$_POST['celular'];
$message=$_POST['mensaje'];

//send mail 
$to='guzman2000f@gmail.com';
$subject='Correo de hotel termales del ruiz: Prueba equipo fiverr';
$body=' <html>
        <body>
            <h3>Feedback</h3>
            <hr>

            <p> Name : '.$name.'</p>
            <br>

            <p> Email : '.$email.'</p>

            <p>'.$message.'</p>

        </body>
        </html>';

$headers  ="From:".$name."<".$email.">\r\n";
$headers .="reply-To:".$email."\r\n";
$headers .="NINE-Version: 1.0\r\n";
$headers .="Content-type: text/html; charset=utf-8";

//sending process
$send=mail($to, $subject, $body, $headers);

if($send){
echo "success";
}

else{
echo "Failed";
}

}
?>