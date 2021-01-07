$( document ).ready(function() {
	width = 0;
	var pb = $("#my-progress-bar");
    $(".btn").on('click',function(){
    	
		   	console.log(width)
		   	console.log($(this).attr("value")*1)
		   	width += $(this).attr("value")*1;
		if (width<=100){
		    pb.attr("style","width:"+ width + '%');
		    pb.text(width * 1  + '%');
	    }
	   	else {
	   		width -= $(this).attr("value")*1;
	   		$(this).prop('disabled', true);
	   	}
    })
});