<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>contact</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
<?php
    require('dp.php');
    // When form submitted, insert values into the database.
    if (isset($_REQUEST['username'])) {
        // removes backslashes
        $username = stripslashes($_REQUEST['username']);
        //escapes special characters in a string
        $username = mysqli_real_escape_string($con, $username);
        $email    = stripslashes($_REQUEST['email']);
        $email    = mysqli_real_escape_string($con, $email);
        $msg = stripslashes($_REQUEST['msg']);
        $msg = mysqli_real_escape_string($con, $msg);
        
        $query    = "INSERT into `uer` (username, msg, email)
                     VALUES ('$username', '$msg', '$email')";
        $result   = mysqli_query($con, $query);
        if ($result) {
            echo "<div class='form'>
                  <h3>You are contected to us  successfully. we are come back soon </h3><br/>
                  <p class='link'>Click here to <a href='main.php'>Home</a></p>
                  </div>";
        } else {
            echo "<div class='form'>
                  <h3>Required fields are missing.</h3><br/>
                  <p class='link'>Click here to <a href='main.php'>registration</a> again.</p>
                  </div>";
        }
    } else {
?>
    <form class="form" action="" method="post">
        <h1 class="login-title">ConTact Us</h1>
        <input type="text" class="login-input" name="username" placeholder="Username" required />
         <input type="text" class="login-input" name="email" placeholder="email" required />
      
       
          <textarea name="msg" cols="40" rows="20" id="msg" placeholder="Message"></textarea>
        
     
        <input type="submit" name="submit" value="ConTact" class="login-button">
        <p class="link"><a href="main.php">Back to Main page</a></p>
    </form>
<?php
    }
?>
</body>
</html>