const { Base_Url } = require("../frontend/js/utils");

jQuery(document).ready(function($) {
  "use strict";

  // Contact Form Submission
  $('form.contactForm').submit(function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    // Validate input and textarea fields
    f.children('input, textarea').each(function() {
      var i = $(this); // Current input/textarea
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // Error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1);
          rule = rule.substr(0, pos);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            var regex = new RegExp(exp);
            if (!regex.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html(ierror ? (i.attr('data-msg') || 'Invalid Input') : '').show('blind');
      }
    });

    // If there are validation errors, stop the form submission
    if (ferror) return false;

    // Serialize the form data to send it as POST payload
    var formData = $(this).serialize();
    var action = `${Base_Url}/submit-form`; 

    // Make a POST request to the /contactform API
    $.ajax({
      type: "POST",
      url: action,
      data: formData,
      success: function(response) {
        if (response == 'OK') {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input, textarea").val(""); // Clear form fields on success
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html(response); // Display error message
        }
      },
      error: function() {
        $("#errormessage").addClass("show");
        $('#errormessage').html("There was an error sending the message."); // Display error if the API request fails
      }
    });

    return false;
  });
});
