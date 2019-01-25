function addHoverClass() {
	$(this).addClass("hover");
	$(this)
		.parent()
		.addClass("focused");
}

function removeHoverClass() {
	$(this).removeClass("hover");
	$(this)
		.parent()
		.removeClass("focused");
}

$(".global-nav li").hover(addHoverClass, removeHoverClass);
