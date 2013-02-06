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
	$("[rel='tooltip']").tooltip();
});

crossroads.addRoute("gallery", function () {
	showPage("gallery");
	$(".carousel").carousel();
});

crossroads.addRoute("home", function () {
	showPage("home");
});

crossroads.addRoute("about-us", function () {
	showPage("about-us");
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
	var currentPage = $(".active-page");
	$(".navbar .active").removeClass("active");
   	if ($("#"+newPage).length > 0) {
   		$(".active-page").addClass("disabled-page").removeClass("active-page");
   		$("#"+newPage).removeClass("disabled-page").addClass("active-page");
   		$('a[data-page="'+newPage+'"]').parent("li").addClass("active");
   	}
}

/**
 * This function changes the sub page
 * @param  {string} id The id attribute of the new sub page
 * @param {string} group An optional subpage group, use data-page-group to declare a div member of a page group
 */
function changeSubPage ( id, group ) {
	if ( $("#"+id).length > 0 ) {
		if ( typeof group == "undefined" ) {
			$(".active-sub-page").addClass(".disabled-sub-page").removeClass(".active-sub-page");
			$("#"+id).addClass(".active-sub-page").removeClass(".disabled-sub-page");
		} else {
			$('.active-sub-page[data-page-group="'+group+'"]').addClass(".disabled-sub-page").removeClass(".active-sub-page");
			$("#"+id).addClass(".active-sub-page").removeClass(".disabled-sub-page");
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