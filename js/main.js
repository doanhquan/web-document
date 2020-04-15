$(document).ready(function(){
	
  $(".test-btn").click(function(){
  	let content = $("#textarea").val();
	$(".result").html(content);
    $(".result").toggle();
  });

});