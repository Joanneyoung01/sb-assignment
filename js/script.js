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
			// To complete
			
		}
	};

	$(document).ready(app.form.init);

}(jQuery);

