<?PHP
//tell we want to work with sessions
session_start();
session_unset();
//remove the session itself
session_destroy();
//redirect to the login page
header("Location: index.php");
?>