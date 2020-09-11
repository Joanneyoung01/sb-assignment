var $ = jQuery.noConflict();

var app = app || {};
!function(){
	"use strict";

	app.form = {
		init: function() {
			var errorEmail = 'Your E-Mail is not valid';
			var errorPassword =  'Your Password is not valid';

			// Validate form before submitting
			// Add the error messages if the email
			// or password is not valid
			$('form').submit(function(event) {
				event.preventDefault();
				var email = $("#email").val(); // save email input
				var password = $("#password").val(); // save password input

				const validatedEmail = function(email) {
					if (!app.form.validateEmail(email)) { // validate email address
						$('#email-error-message').text(errorEmail);
						return false // error message 
					} else {
						$('#email-error-message').text();
						return true
					}
				}

				const validatedPassword = function(password) {
					if (!app.form.validatePassword(password)) { // validate password
						$('#password-error-message').text(errorPassword); // error message 
					} else {
						$('#password-error-message').text();
						return true
					}
				}

				if (validatedEmail(email) && validatedPassword(password)) { // if validated email and password
					console.log("user has been validated")
					alert("User signed in")
					return true
				} else {
					console.log("user has not been validated")
					return false
				}
				
			});
		},
		/**
		 * Email Validation
		 * 
		 * @param {String} email Email value as a String
		 * 
		 * @return {Boolean} If email is valid return true otheriwse false
		 */
		validateEmail: function(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		/**
		 * Password Validation
		 * 
		 * @param {String} password Password value as a String
		 * 
		 * @return {Boolean} If password is valid return true otherwise false
		 */
		validatePassword: function(password) {
			// The password's first character must be a letter, it must contain at least 4 characters and no more than 15 characters and no characters other than letters, numbers and the underscore may be used
			var re = /^[a-zA-Z]\w{3,14}$/;
			return re.test(password);
		}
	};

	$(document).ready(app.form.init);

}(jQuery);

// var email = $("#email").val();
// var password = $("#password").val();

			// $('#email').keyup(function() { // on keyup
			// 	var value = $(this).val(); // retrieve the value of the input

			// 	if (this.validateEmail(value)) // if the value is false
			// 		$('#sign-in').prop('disabled', true); // disable the button
			// 	else // if not
			// 		$('#sign-in').prop('disabled', false); // enable it
			// });

