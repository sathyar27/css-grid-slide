(function ($) {
	$.fn.customSelect = function (options) {
		return this.each(function () {
			var el = $(this);

			var optionTag = el.children(),
				wrapperDIV = $('<div class="customSelect"/>'),
				valueHolder = $('<span class="customSelectInner"/>'),
				spanTag = $('<span class="text"/>'),
				spanTag1 = $('<span class="bgText"/>'),
				icon = $('<i class="arrow"/>'),
				ULTag = $('<ul/>');

				el.parent().append(valueHolder);
				el.parent().append(icon);
				valueHolder.append(spanTag);
				valueHolder.append(spanTag1);
				el.parent().append(wrapperDIV);
				wrapperDIV.append(ULTag);


				optionTag.each(function () {
					ULTag.append("<li>" + $(this).text() + "</li>");
				}).end().remove();

			spanTag.click(function () {
				if($(this).parents('.absoluteSelect').hasClass('next') && $(this).parents('.absoluteSelect').hasClass('active')) {
					$(this).parents('.absoluteSelect').removeClass('active next');
					$('.arrow').addClass('close');
				}
				else {
					$('.arrow').removeClass('close');
					$(this).parents('.absoluteSelect').addClass('active');
				}
			});

			$('.text').text("Choose");
			
			ULTag.each(function () {
				$('li', this).click(function () {
					$('.text').text($(this).text());
					$(this).parents('.absoluteSelect').removeClass('active').addClass('closeActive next')

					if($(this).text() == "Choose") {
						$('.text').addClass('choose');
						$('.arrow').removeClass('close');
						$('.selectGroup p i').text('column');
						$('.gridAutoFlow').removeClass('autoFlowRow autoFlowDense autoFlowColDense autoFlowRowDense');
					}
					else if($(this).text() == "dense") {
						$('.selectGroup p i').text('dense');
						$('.gridAutoFlow').addClass('autoFlowDense').removeClass('autoFlowRow autoFlowColDense autoFlowRowDense');
					}
					else if($(this).text() === "column dense") {
						$('.selectGroup p i').text('column dense');
						$('.gridAutoFlow').addClass('autoFlowColDense').removeClass('autoFlowRow autoFlowDense autoFlowRowDense');
						/*setTimeout(function() {
							$('.gridAutoFlow').addClass('active inActive');
						}, 2500);*/
					}
					else if($(this).text() === "row") {
						$('.selectGroup p i').text('row');
						$('.gridAutoFlow').addClass('autoFlowRow').removeClass('autoFlowDense autoFlowColDense autoFlowRowDense');
					}
					else if($(this).text() === "row dense") {
						$('.selectGroup p i').text('row dense');
						$('.gridAutoFlow').addClass('autoFlowRowDense').removeClass('autoFlowRow autoFlowDense autoFlowColDense');
					}
					else {
						$('.arrow').addClass('close');
						$('.text').removeClass('choose');
						$('.selectGroup p i').text('column');
						$('.gridAutoFlow').removeClass('autoFlowRow autoFlowDense autoFlowColDense autoFlowRowDense');
					}
				});
			});

			icon.click(function() {
				if($(this).hasClass('close')) {
					$(this).removeClass('close');
					$('.bgText').addClass('active');
					$('.text').text('Choose').removeClass('choose');
					$('.absoluteSelect').removeClass('active next closeActive');
					setTimeout(function(){ $('.bgText').removeClass('active'); }, 500);
				}
			});
		});
	};
}(jQuery));

$('select').customSelect({});
