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

				// To complete


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
		 * @return {Boolean} If password is valid return true otheriwse false
		 */
		validatePassword: function(password) {
			// The password's first character must be a letter, it must contain at least 4 characters and no more than 15 characters and no characters other than letters, numbers and the underscore may be used
			var re = /^[a-zA-Z]\w{3,14}$/;
			return re.test(password);
		}
	};

	$(document).ready(app.form.init);

}(jQuery);

