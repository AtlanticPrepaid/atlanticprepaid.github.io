(function ($) { 
	jQuery('#contact-form').click(function () {
		//var formData = new FormData($('#contactUsForm')[0]);
    	const apiData = { firstName: contactUsForm.firstName.value, 
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
    	$.ajax(
        {
            url : "http://35.182.103.129/email/contactform",
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
            	
            },error: function(jqXHR, textStatus, errorThrown){
                //if fails   
                swal("Error", "Some error has occured. Please try again later.", "error"); 
                
            }
        });
        
        event.preventDefault(); //STOP default action
	}); 
})(jQuery);