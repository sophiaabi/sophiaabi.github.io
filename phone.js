//lolading the page
$(document).ready(function() { // do this when the document is loaded
	$("#dialerPage").show();
	$("#dialer").css('border-bottom', 'solid');
	$("#dialer").css('border-bottom-width', '5px');
	$("#dialer").css('border-bottom-color', '#CD79EF');
	$("#contactListPage").hide();
	$("#addContactPage").hide();
});


//showing/hiding the tabs
$("#dialer").click(function() { // when "button_id" is clicked
	$("#dialerPage").show(); // show element
	$("#dialer").css('border-bottom', 'solid');
	$("#dialer").css('border-bottom-width', '5px');
	$("#dialer").css('border-bottom-color', '#CD79EF');
	$("#contactList").css('border-bottom-style', 'none');
	$("#addContact").css('border-bottom-style', 'none');
	$("#contactListPage").hide();
	$("#addContactPage").hide();	// hide other element
});

$("#contactList").click(function() { // when "button_id" is clicked
	$("#contactListPage").show(); // show element
	$("#contactList").css('border-bottom', 'solid');
	$("#contactList").css('border-bottom-width', '5px');
	$("#contactList").css('border-bottom-color', '#CD79EF');
	$("#dialer").css('border-bottom-style', 'none');
	$("#addContact").css('border-bottom-style', 'none');
	$("#dialerPage").hide();	
	$("#addContactPage").hide();// hide other element
});

$("#addContact").click(function() { // when "button_id" is clicked
	$("#addContactPage").show(); // show element
	$("#addContact").css('border-bottom', 'solid');
	$("#addContact").css('border-bottom-width', '5px');
	$("#addContact").css('border-bottom-color', '#CD79EF');
	$("#dialer").css('border-bottom-style', 'none');
	$("#contactList").css('border-bottom-style', 'none');
	$("#contactListPage").hide();
	$("#dialerPage").hide();	// hide other element
});

$("#clear").click(function() {
	$("#dialerForm").trigger("reset");
});

$("#clearContactButton").click(function() {
	$("#contactForm").trigger("reset");
});

$("#d1").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "1" );
});

$("#d2").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "2" );
});

$("#d3").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "3" );
});

$("#d4").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "4" );
});

$("#d5").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "5" );
});

$("#d6").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "6" );
});

$("#d7").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "7" );
});

$("#d8").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "8" );
});

$("#d9").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "9" );
});

$("#d0").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "0" );
});

$("#dPound").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "#" );
});

$("#dStar").click(function() {
	var input = $( "#dialerBox" );
	input.val( input.val() + "*" );
});