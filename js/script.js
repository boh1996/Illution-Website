History.Adapter.bind(window,'statechange',function(){
	crossroads.parse(getPage());
	crossroads.resetState();
});

$(document).ready(function() {
	crossroads.parse(getPage());
	crossroads.resetState();
});

crossroads.addRoute("", function () {
	
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
   		$("title").html(title);
   		if ($('a[data-target="'+newPage+'"]').length > 0 && !$('a[data-target="'+newPage+'"]').parent("li").hasClass("active")) {
   			if ($('a[data-target="'+newPage+'"]').attr("data-no-active") != "true") {
   				$('a[data-target="'+newPage+'"]').parent("li").addClass("active");
   			}
   		}
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