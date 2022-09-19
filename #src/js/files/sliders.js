
$('.slider-home__slider')
	.on('afterChange init', function (event, slick, direction) {
		// console.log('afterChange/init', event, slick, slick.$slides);
		// remove all prev/next
		slick.$slides.removeClass('prevSlide').removeClass('nextSlide');

		// find current slide
		for (var i = 0; i < slick.$slides.length; i++) {
			var $slide = $(slick.$slides[i]);
			if ($slide.hasClass('slick-current')) {
				// update DOM siblings
				$slide.prev().addClass('prevSlide');
				$slide.next().addClass('nextSlide');
				break;
			}
		}
	}
	)
	.on('beforeChange', function (event, slick) {
		// optional, but cleaner maybe
		// remove all prev/next
		slick.$slides.removeClass('prevSlide').removeClass('nextSlide');
	})
$('.slider-home__slider').slick({
	speed: 500,
	arrows: false,
	slidesToShow: 1,
	infinite: false,
	useTransform: false,
	autoplay: true,
	autoplaySpeed: 3000,
});

$('.content-workshop__slick').slick({
	speed: 800,
	arrows: false,
	dots: true,
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	appendDots: '.content-workshop__pagination'
});
