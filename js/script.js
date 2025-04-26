document.addEventListener('DOMContentLoaded', () => {

	new WOW().init();

	// Header START
	// $('.hamburger').on('click', function() {
	// 	if($(this).hasClass('is-active')) {
	// 		$(this).removeClass('is-active');
	// 		$('.header-mobile-wrap').slideUp(500);
	// 	}
	// 	else {
	// 		$(this).addClass('is-active');
	// 		$('.header-mobile-wrap').slideDown(500);
	// 	}
	// });
	document.querySelector('.hamburger').addEventListener('click', function() {
		const headerMobileWrap = document.querySelector('.header-mobile-wrap');
		this.classList.toggle('is-active');
		if (this.classList.contains('is-active')) {
			 headerMobileWrap.style.display = 'block';
		} else {
			 headerMobileWrap.style.display = 'none';
		}
  });
  
	// function scrollHeader() {
	// 	let headerTopHeight = $('.header-top').height();
	// 	if($(this).scrollTop() > headerTopHeight) {
	// 		$('.header-bottom').addClass('is-fixed');
	// 	}
	// 	else {
	// 		$('.header-bottom').removeClass('is-fixed');
	// 	}
	// }
// 	function scrollHeader() {
// 		const headerTopHeight = document.querySelector('.header-top').offsetHeight;
// 		if (window.scrollY > headerTopHeight) {
// 			 document.querySelector('.header-bottom').classList.add('is-fixed');
// 		} else {
// 			 document.querySelector('.header-bottom').classList.remove('is-fixed');
// 		}
//   }
function scrollHeader() {
	const headerTopHeight = document.querySelector('.header-top').offsetHeight;
	if (window.scrollY > headerTopHeight) {
		 document.querySelector('.header-bottom').classList.add('is-fixed');
	} else {
		 document.querySelector('.header-bottom').classList.remove('is-fixed');
	}
}
window.addEventListener('scroll', scrollHeader);

  
	// function showArrowUp() {
	// 	if($(this).scrollTop() > 1500) {
	// 		$('.go-up').addClass('is-active');
	// 	}
	// 	else {
	// 		$('.go-up').removeClass('is-active');
	// 	}
	// }

	function showArrowUp() {
		const goUp = document.querySelector('.go-up');
		if (window.scrollY > 1500) {
			goUp.classList.add('is-active');
		} else {
			goUp.classList.remove('is-active');
		}
	}

	document.querySelector('.go-up').addEventListener('click', function(e) {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	// Anchor link smooth scroll
	document.querySelectorAll('.anchor-link').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
			document.querySelector('.header-mobile-wrap').style.display = 'none';
			document.querySelector('.hamburger').classList.remove('is-active');
		});
	});

	// Number counter START
	// function animateCounter(element, targetValue, duration) {
	// 	jQuery({ count: jQuery(element).text() }).animate(
	// 		{
	// 			count: targetValue
	// 		},
	// 		{
	// 			duration: duration,
	// 			easing: 'linear',
	// 			step: function () {
	// 				jQuery(element).text(Math.floor(this.count));
	// 			},
	// 			complete: function () {
	// 				jQuery(element).text(targetValue);
	// 			},
	// 		}
	// 	);
	// }
	// Number counter - Replace jQuery animate with vanilla JS
	function animateCounter(element, targetValue, duration) {
		let startValue = parseInt(element.textContent, 10);
		let startTime = performance.now();
		const step = () => {
			const elapsedTime = performance.now() - startTime;
			if (elapsedTime < duration) {
				element.textContent = Math.floor(startValue + (targetValue - startValue) * (elapsedTime / duration));
				requestAnimationFrame(step);
			} else {
				element.textContent = targetValue;
			}
		};
		requestAnimationFrame(step);
	}


	// function isElementInViewport(elem) {
	// 	if (!elem) return false;
	// 	var rect = elem.getBoundingClientRect();
	// 	return (
	// 		rect.top >= 0 &&
	// 		rect.left >= 0 &&
	// 		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	// 	);
	// }
// Check if element is in viewport
function isElementInViewport(elem) {
	if (!elem) return false;
	const rect = elem.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}
	// $(window).on('scroll', function () {
	// 	scrollHeader();
	// 	showArrowUp();

	// 	if (isElementInViewport($('.num-scroll')[0])) {
	// 		$('.num-js').each(function () {
	// 			var targetValue = parseInt($(this).data('count'));
	// 			var duration = 2000;
	// 			animateCounter(this, targetValue, duration);
	// 		});
	// 	}
	// });

	// $(window).trigger('scroll');
	// // Number counter END

	// scrollHeader();
	// showArrowUp();

	// $('.anchor-link').on('click', function () {
	//     let href = $(this).attr('href');

	//     $('html, body').animate({
	//         scrollTop: $(href).offset().top
	//     }, {
	//         duration: 700,
	//     });
	// 	$('.header-mobile-wrap').slideUp(500);
	// 	$('.hamburger').removeClass('is-active');
	//     return false;
	// });

	// $('.go-up').on('click', function () {
	//     $('html, body').animate({
	//         scrollTop: 0
	//     }, {
	//         duration: 700,
	//     });
	//     return false;
	// });
	// Scroll listener for triggering animations and counter
	window.addEventListener('scroll', () => {
		scrollHeader();
		showArrowUp();
		const numScrollElement = document.querySelector('.num-scroll');
		if (numScrollElement && isElementInViewport(numScrollElement)) {
			document.querySelectorAll('.num-js').forEach(function (el) {
				const targetValue = parseInt(el.dataset.count, 10);
				const duration = 2000;
				animateCounter(el, targetValue, duration);
			});
		}
	});
	// Header END
	
	
	// // Banner END


	// // Services START
	// $('.services-btn').magnificPopup({
	// 	type: 'inline',
	// 	showCloseBtn: false,
	// 	removalDelay: 500,
	// 	callbacks: {
	// 		beforeOpen: function() {
	// 		   this.st.mainClass = this.st.el.attr('data-effect');
	// 		}
	// 	},
	// });

	document.querySelectorAll('.services-btn').forEach(button => {
		button.addEventListener('click', function() {
		  const effect = this.dataset.effect;
		  const modal = document.querySelector(this.getAttribute('data-src'));
		  if (modal) {
			 modal.classList.add('open', effect);
			 document.body.style.overflow = 'hidden'; // Disable scroll when modal is open
		  }
		});
	 });
	 
	 document.querySelector('.modal-form-close').addEventListener('click', function() {
		const modal = document.querySelector('.modal.open');
		if (modal) {
		  modal.classList.remove('open');
		  document.body.style.overflow = 'auto'; // Re-enable scroll when modal is closed
		}
	 });
	 
	// $('.modal-form-close').on('click', function() {
	// 	$.magnificPopup.close();
	// });
	// // Services END

	// // Gallery START
	// $('.gallery-wrap a').magnificPopup({
	// 	type: 'image',
	// 	gallery: {
	// 		enabled: true
	// 	},
	// 	callbacks: {
	// 		beforeOpen: function() {
	// 			this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
	// 			this.st.mainClass = this.st.el.attr('data-effect');
	// 		}
	// 	},
	// });

	// $('.gallery-btn a').on('click', function(e) {
	// 	e.preventDefault();
	// 	var galleryItem = $('.gallery-item');

	// 	if($(this).hasClass('is-active')) {
	// 		$(this).removeClass('is-active');
	// 		$(this).text('Show more');
	// 		galleryItem.each(function() {
	// 			if($(this).hasClass('is-active')) {
	// 				$(this).removeClass('is-active');
	// 				$(this).slideUp();
	// 			}
	// 		});
	// 	}
	// 	else {
	// 		$(this).addClass('is-active');
	// 		$(this).text('Hide');
	// 		galleryItem.each(function() {
	// 			if(!$(this).is(':visible')) {
	// 				$(this).addClass('is-active');
	// 				$(this).slideDown();
	// 			}
	// 		});
	// 	}
	// });
	document.querySelectorAll('.gallery-wrap a').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
		  e.preventDefault();
		  const src = this.href;
		  const lightbox = document.createElement('div');
		  lightbox.classList.add('lightbox');
		  lightbox.innerHTML = `<div class="lightbox-overlay">
										<img src="${src}" alt="Gallery Image">
										<button class="close-lightbox">Close</button>
									 </div>`;
		  document.body.appendChild(lightbox);
		  
		  lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
			 lightbox.remove();
		  });
		});
	 });
	 


	// Banner Swiper setup (ensure Swiper.js is imported)
	const bannerSwiper = new Swiper('.banner-swiper', {
		speed: 1000,
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: '.banner-swiper .swiper-button-next',
			prevEl: '.banner-swiper .swiper-button-prev',
		},
		pagination: {
			el: '.banner-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});



	document.querySelector('.gallery-btn a').addEventListener('click', function(e) {
		e.preventDefault();
		const galleryItems = document.querySelectorAll('.gallery-item');
		const button = this;
		if (button.classList.contains('is-active')) {
			button.classList.remove('is-active');
			button.textContent = 'Show more';
			galleryItems.forEach(item => {
				item.classList.remove('is-active');
				item.style.display = 'none';
			});
		} else {
			button.classList.add('is-active');
			button.textContent = 'Hide';
			galleryItems.forEach(item => {
				item.classList.add('is-active');
				item.style.display = 'block';
			});
		}
	});

	// Reviews Swiper setup
	const reviewsSwiper = new Swiper('.reviews-swiper', {
		speed: 1000,
		spaceBetween: 20,
		pagination: {
			el: '.reviews-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			320: { slidesPerView: 1 },
			575: { slidesPerView: 2 },
			992: { slidesPerView: 3 },
		},
	});
});

