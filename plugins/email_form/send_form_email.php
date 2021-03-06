<!-- https://www.freecontactform.com/email_form.php -->
<!-- File Name: send_form_email.php (you must use this filename exactly) -->

<?php
	if(isset($_POST['emailAddress'])) {
	
		// EDIT THE 2 LINES BELOW AS REQUIRED
		$email_to = "jan.p.tyra@gmail.com";				// or "contact@jiavu.de"
		$email_subj = "Email from jiavu.de";
	
		function died($error) {
			// your error code can go here
			echo "We are very sorry, but there were error(s) found with the form you submitted. ";
			echo "These errors appear below.<br /><br />";
			echo $error."<br /><br />";
			echo "Please go back and fix these errors.<br /><br />";
			die();
		}
	
	
		// validation expected data exists
		if(
			/* !isset($_POST['first_name']) || */
			/* !isset($_POST['last_name']) || */
			!isset($_POST['emailAddress']) ||
			!isset($_POST['emailSubject']) ||
			!isset($_POST['emailMessage'])/* ||
			!isset($_POST['telephone']) || */
			/* !isset($_POST['comments'])*/
		) { 
			died('I am sorry, but there appears to be a problem with the form you submitted.');       
		}
	
		
	
		/* $first_name = $_POST['first_name']; // required */
		/* $last_name = $_POST['last_name']; // required */
		$email_address = $_POST['emailAddress']; // required
		$email_subject = $_POST['emailSubject']; // required
		$email_message = $_POST['emailMessage']; // required
		/* $telephone = $_POST['telephone']; // not required */
		/* $comments = $_POST['comments']; // required */
	
		$error_message = "";
		$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
	
		if(!preg_match($email_exp,$email_address)) {
			$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
		}
		
		/* 
		$string_exp = "/^[A-Za-z .'-]+$/";
		
		if(!preg_match($string_exp,$first_name)) {
			$error_message .= 'The First Name you entered does not appear to be valid.<br />';
		}
		
		if(!preg_match($string_exp,$last_name)) {
			$error_message .= 'The Last Name you entered does not appear to be valid.<br />';
		}
		
		if(strlen($comments) < 2) {
			$error_message .= 'The Comments you entered do not appear to be valid.<br />';
		}
		 */
		
		if(strlen($error_message) > 0) {
			died($error_message);
		}
		
		$email_final = "Form details below.\n\n";

		
		function clean_string($string) {
			$bad = array("content-type","bcc:","to:","cc:","href");
			return str_replace($bad,"",$string);
		}
	
		
	
		//$email_message .= "First Name: ".clean_string($first_name)."\n";
		//$email_message .= "Last Name: ".clean_string($last_name)."\n";
		$email_final .= "Email: ".clean_string($email_address)."\n";
		$email_final .= "Subject: ".clean_string($email_subject)."\n";
		$email_final .= "Message:\n".clean_string($email_message)."\n";
		//$email_message .= "Telephone: ".clean_string($telephone)."\n";
		//$email_message .= "Comments: ".clean_string($comments)."\n";
	
		// create email headers
		$headers = 'From: '.$email_address."\r\n".
					'Reply-To: '.$email_address."\r\n" .
					'X-Mailer: PHP/' . phpversion();
		@mail($email_to, $email_subj, $email_final, $headers);  

		?>		<!-- Why are the php tags placed this way? -->
		
		<!-- include your own success html here -->
		
		Thank you for contacting me. I will be in touch with you very soon.<br>
		<br>
		<a href="https://jiavu.de">Back</a>
		
		<?php
	
	}
?>