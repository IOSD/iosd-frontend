<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_college = $_POST['college'];
$field_no = $_POST['phone'];
$field_message = $_POST['message'];

$mail_to = 'iosddtu@gmail.com';
$subject = 'Message from a site visitor '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Phone Number: '.$field_no."\n";
$body_message .= 'College: '.$field_college;
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
    <script language="javascript" type="text/javascript">
        alert('Thank you we will reply back shortly.');
        window.location = 'index.html';
    </script>
<?php
}
else { ?>
    <script language="javascript" type="text/javascript">
        alert('Something went wrong. Please try again or contact at iosddtu@gmail.com');
        window.location = 'index.html';
    </script>
<?php
}

?>