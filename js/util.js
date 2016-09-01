var page = null;

(function($) {
$.extend({
	definePage: function(definition) {
		$(document).ready(function() {
			page = {};
			$.extend(page, definition);
			page.init();
		});
	},
});

$.fn.extend({
	scrollToCorrespondingAnchor: function(extraOffset) {
		extraOffset = extraOffset || -32;
		
		return $(this).click(function(e) {
			e.preventDefault();
			if (page.disableScroll) {
				return;
			}
			page.disableScroll = true;
			var href = $(this).attr("href").substring(1);
			var top = $("a[name='" + href + "']").offset().top + extraOffset;
			$("html, body").animate({ scrollTop: top }, "slow", null, function() {
				page.disableScroll = false;
			});
		})
	},
});
})(jQuery);