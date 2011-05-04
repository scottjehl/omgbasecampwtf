(function($){

	$( "input#post_title, textarea#comment_body, textarea#post_body" ).live("keyup",function(){
		var token = $(this).is("input") ? "lastBCTitle" : "lastBCMessage";
		localStorage[ token ] = $(this).val();
	});
	
	$("<a href='#' id='backup'>OMG BASECAMP WTF! Restore my message now!</a>")
		.css({
			display: "block",
			position: "fixed",
			bottom: 0,
			right: 0,
			padding: "5px 10px",
			"font-family": "Arial",
			background: "black",
			color: "#fff",
			"font-size": "11px",
			"text-decoration": "none"
		})
		.appendTo( "body" )
		.click(function(){
			if( confirm("Are you sure?") ){
				$( "input#post_title" ).val(localStorage["lastBCTitle"]);
				$( "textarea" ).val(localStorage["lastBCMessage"]);
			}	
			return false;
		});
})(jQuery);