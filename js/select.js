(function ($) {
	$.fn.customSelect = function (options) {
		return this.each(function () {
			var el = $(this);
				el.commonWrap = $('<div class="absoluteSelect"/>');

			var optionTag = el.children(),
				wrapperDIV = $('<div class="customSelect"/>'),
				valueHolder = $('<span class="customSelectInner"/>'),
				spanTag = $('<span class="text"/>'),
				spanTag1 = $('<span class="bgText"/>'),
				icon = $('<i class="arrow"/>'),
				ULTag = $('<ul/>');

				el.parent().append(el.commonWrap);
				el.commonWrap.append(valueHolder);
				el.commonWrap.append(icon);
				valueHolder.append(spanTag);
				valueHolder.append(spanTag1);
				el.commonWrap.append(wrapperDIV);
				wrapperDIV.append(ULTag);


				optionTag.each(function () {
					ULTag.append("<li>" + $(this).text() + "</li>");
				}).end().remove();

			spanTag.click(function () {
				if(el.commonWrap.hasClass('next') && el.commonWrap.hasClass('active')) {
					el.commonWrap.removeClass('active next');
					el.commonWrap.find('.arrow').addClass('close');
				}
				else {
					el.commonWrap.find('.arrow').removeClass('close');
					el.commonWrap.addClass('active');
				}
			});

			var defaultText = el.commonWrap.find('li:first-child').text();
            el.commonWrap.find('.text').text(defaultText);

			var currval;
			ULTag.each(function () {
				$('li', this).click(function () {
					currval = $(this).text();
					el.commonWrap.find('.text').text(currval);
					el.commonWrap.removeClass('active').addClass('closeActive next')
					el.commonWrap.find('.arrow').removeClass('close');
					el.commonWrap.find('.arrow').addClass('close');
					el.commonWrap.parent('.selectGroup').find('p i').text(currval);

					if($(this).text() == defaultText) {
						el.commonWrap.find('.text').addClass('choose');
						el.commonWrap.find('.arrow').removeClass('close');
						el.commonWrap.parent('.selectGroup').find('p i').text(defaultText);
					}
					else {
						el.commonWrap.find('.arrow').addClass('close');
						el.commonWrap.find('.text').removeClass('choose');
						el.commonWrap.parent('.selectGroup').find('p i').text(currval);
					}

					if($(this).text() == 'dense') {
						$('.gridAutoFlow').addClass('afD').removeClass('afCD afR afRD');
					}
					else if($(this).text() === 'column dense') {
						$('.gridAutoFlow').addClass('afCD').removeClass('afD afR afRD');
					}
					else if($(this).text() === 'row') {
						$('.gridAutoFlow').addClass('afR').removeClass('afD afCD afRD');
					}
					else if($(this).text() === 'row dense') {
						$('.gridAutoFlow').addClass('afRD').removeClass('afD afCD afR');
					}
					else {
						$('.gridAutoFlow').removeClass('afD afCD afR afRD');
					}

					if($(this).text() == 'minmax(100px,auto)') {
						$('.gridAutoRows').addClass('mm').removeClass('mic fr auto');
					}
					else if($(this).text() === 'min-content') {
						$('.gridAutoRows').addClass('mic').removeClass('mm fr auto');
					}
					else if($(this).text() === 'minmax(min-content,auto)') {
						$('.gridAutoRows').addClass('mmic').removeClass('mm mic auto');
					}
					else if($(this).text() === 'auto') {
						$('.gridAutoRows').addClass('auto').removeClass('mm mic fr');
					}
					else {
						$('.gridAutoRows').removeClass('mm mic fr auto');
					}

					if($(this).text() == '1 / 3') {
						$('.gridCol').addClass('gridCol1').removeClass('gridCol2 gridCol3');
					}
					else if($(this).text() === '1 / span 3') {
						$('.gridCol').addClass('gridCol2').removeClass('gridCol3 gridCol4');
					}
					else if($(this).text() === 'header') {
						$('.gridCol').addClass('gridCol3').removeClass('gridCol1 gridCol2');
					}
					else if($(this).text() === 'auto') {
						$('.gridCol').addClass('auto').removeClass('gridCol1 gridCol2 gridCol3');
					}
					else {
						$('.gridCol').removeClass('gridCol1 gridCol2 gridCol3');
					}

					if($(this).text() == '1 / 3') {
						$('.gridRow').addClass('gridCol1').removeClass('gridRow2 gridRow3');
					}
					else if($(this).text() === '1 / span 3') {
						$('.gridRow').addClass('gridCol2').removeClass('gridRow3 gridRow4');
					}
					else if($(this).text() === 'header') {
						$('.gridRow').addClass('gridCol3').removeClass('gridRow1 gridRow2');
					}
					else if($(this).text() === 'auto') {
						$('.gridRow').addClass('auto').removeClass('gridRow1 gridRow2 gridRow3');
					}
					else {
						$('.gridRow').removeClass('gridRow1 gridRow2 gridRow3 auto');
					}
				});
			});

			icon.click(function() {
				if($(this).hasClass('close')) {
					$(this).removeClass('close');
					el.commonWrap.find('.bgText').addClass('active');
					el.commonWrap.find('.text').text(defaultText).removeClass('choose');
					el.commonWrap.parent('.selectGroup').find('p i').text(defaultText);
					el.commonWrap.removeClass('active next closeActive');
					setTimeout(function(){ el.commonWrap.find('.bgText').removeClass('active'); }, 500);
					$('.output').removeClass('afD afCD afR afRD mm mic fr auto gridCol1 gridCol2 gridCol3 gridRow1 gridRow2 gridRow3');
				}
			});
		});
	};
}(jQuery));
$('select').customSelect({});
