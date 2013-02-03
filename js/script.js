var History = window.History;
$('[data-page]').on("click",function () {
	var url = "";

	if ( $(this).attr("data-toggle") == undefined ) {
	  	event.preventDefault();

	  	if (event.target.nodeName == 'A') {
		   	url = event.target.getAttribute('data-page');

		   	if ( url == "-back" ) {
		   		History.back();
		   		return;
		   	}

		    History.pushState(null,$("title").html(), root+url);
		}
	}
});

History.Adapter.bind(window,'statechange',function(){
	crossroads.parse(getPage());
	crossroads.resetState();
});

$(document).ready(function() {
	crossroads.parse(getPage());
	crossroads.resetState();
});

crossroads.addRoute("gallery", function () {
	showPage("gallery");
});

crossroads.addRoute("home", function () {
	showPage("home");
});

crossroads.addRoute("", function () {
	showPage("home");
});

/**
 * This function shows a page and change the navbar link properly
 * @param  {string} newPage The name of the page to change too
 */
function showPage (newPage, title) {
	$("#loading-background").hide();
	$("#loading").hide();
	var currentPage = $(".active_page");
	$(".active").removeClass("active");
   	if ($("#"+newPage).length > 0) {
   		$(".active_page").addClass("disabled_page").removeClass("active_page");
   		$("#"+newPage).removeClass("disabled_page").addClass("active_page");
   		$('a[data-page="'+newPage+'"]').parent("li").addClass("active");
   	}
}

/**
 * This function returns the current "page",
 * ready to use with the URL Routing system
 * @return {string}
 */
function getPage () {
	return History.getState().url.replace(root,"");
}