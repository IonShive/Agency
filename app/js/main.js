$(function () {

	var mixer = mixitup('.works__items');

	wow = new WOW(
		{
			boxClass: 'wow',
			animateClass: 'animate__animated',
			offset: 0,
			mobile: true,
			live: true
		}
	)
	wow.init();

	$('.team__slider').slick({
		fade: true
	});

	$(".header__nav-link").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});

	$(".team__slider-star").rateYo({
		normalFill: "#777777",
		ratedFill: "#252525",
		readOnly: true,
		starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="16pt" height="15pt" viewBox="0 0 16 15"><g><path d="M 14.410156 5.023438 L 10.421875 4.402344 L 8.640625 0.519531 C 8.320312 -0.167969 7.398438 -0.179688 7.074219 0.519531 L 5.292969 4.402344 L 1.304688 5.023438 C 0.589844 5.136719 0.308594 6.082031 0.824219 6.625 L 3.707031 9.640625 L 3.023438 13.902344 C 2.902344 14.675781 3.65625 15.253906 4.292969 14.890625 L 7.855469 12.878906 L 11.421875 14.890625 C 12.054688 15.25 12.8125 14.675781 12.691406 13.902344 L 12.007812 9.640625 L 14.890625 6.625 C 15.40625 6.082031 15.121094 5.136719 14.410156 5.023438 Z M 10.601562 9.148438 L 11.246094 13.203125 L 7.855469 11.292969 L 4.46875 13.203125 L 5.113281 9.148438 L 2.367188 6.277344 L 6.160156 5.6875 L 7.855469 1.996094 L 9.554688 5.6875 L 13.34375 6.277344 Z M 10.601562 9.148438 "/></g></svg>',
	});

	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

		return {
			total,
			hours,
			minutes,
			seconds
		};
	}

	function initializeClock(id, endtime) {
		const clock = document.querySelector('.header__clock');
		const hoursSpan = clock.querySelector('.header__hours');
		const minutesSpan = clock.querySelector('.header__minutes');
		const secondsSpan = clock.querySelector('.header__seconds');

		function updateClock() {
			const t = getTimeRemaining(endtime);

			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		const timeinterval = setInterval(updateClock, 1000);
	}

	const deadline = $('.header__clock').attr('data-time');
	initializeClock('.header__clock', deadline);

});
