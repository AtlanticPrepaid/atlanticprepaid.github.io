(function ($) {   
	jQuery('#contact-form').click(function () {
		
		var formData = new FormData($('#contactUsForm')[0]);
    	const apiData = { firstName: contactUsForm.firstName.value, 
						  lastName: contactUsForm.lastName.value,
						  email: contactUsForm.email.value, 
						  phoneNumber: contactUsForm.phoneNumber.value,
						  address: contactUsForm.address.value, 
						  chooseOption: contactUsForm.chooseOption.value,
						  message: contactUsForm.message.value };
			
		var formData = JSON.stringify(apiData); 
    	alert(formData);
		
    	$.ajax(
        {
            url : "http://localhost:8082/email/contactform",
            type: "POST",
            crossDomain: true,
            data: formData,
            //use contentType, processData for sure.
            contentType : "application/json",
            processData: false,
            success:function(data, textStatus, jqXHR){
                //data: return data from server
                alert('it worked'+this.jqXHR);
                //courseId = data;
            	
            },error: function(jqXHR, textStatus, errorThrown){
                //if fails   
                alert('it didnt work');   
            }
        });
        
        event.preventDefault(); //STOP default action
	}); 
})(jQuery);