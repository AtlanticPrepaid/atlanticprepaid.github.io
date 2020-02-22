(function ($) { 
	jQuery('#contact-form').click(function () {
            var valid_count = 0;

            var first_name = $('#firstName').val();
            var last_name = $('#lastName').val();
            var email = $('#email').val();

            $(".error").remove();

            if (first_name.length < 1) {
              $('#firstName').after('<small><span class="error">First Name is required</span></small>');
               valid_count += 1;
            }
            if (last_name.length < 1) {
              $('#lastName').after('<small><span class="error">Last Name is required</span></small>');
              valid_count += 1;
            }
            if (email.length < 1) {
              $('#email').after('<small><span class="error">Email is required</span></small>');
               valid_count += 1;
            } else {
              var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                          
              var validEmail = regEx.test(email);
              if (!validEmail) {
                $('#email').after('<span class="error">Enter a valid email</span>');
                 valid_count += 1;
              }
            }
		//var formData = new FormData($('#contactUsForm')[0]);
    	const apiData = {   firstName: contactUsForm.firstName.value, 
                          lastName: contactUsForm.lastName.value,
                          email: contactUsForm.email.value, 
                          phoneNumber: contactUsForm.phoneNumber.value,
                          address: contactUsForm.address.value, 
                          chooseOption: contactUsForm.chooseOption.value,
                          message: contactUsForm.message.value,
						              userId: contactUsForm.USERID.value
                          };
		var formData = JSON.stringify(apiData); 
        // alert(formData);
        if(valid_count == 0){
            $.ajax(
                {
                    // url : "http://35.182.103.129/email/contactform",-
                    url : "https://billing.atlanticprepaid.com/email/contactform",
                    type: "POST",
                    crossDomain: true,
                    data: formData,
                    //use contentType, processData for sure.
                    contentType : "application/json",
                    processData: false,
                    success:function(data, textStatus, jqXHR){
                        //data: return data from server
                        // alert('it worked');
                        swal("Success", "We have received your message. Atlantic Prepaid representative will contact you shortly.", "success");
                        //courseId = data;
                        var frm = document.getElementsByName('contactUsForm')[0];
                        frm.reset();
                    },error: function(jqXHR, textStatus, errorThrown){
                        //if fails   
                        swal("Error", "Some error has occured. Please try again later.", "error"); 
                        
                    }
                });
        }
        event.preventDefault(); //STOP default action
	}); 
})(jQuery);