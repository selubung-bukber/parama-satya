// Review.js

// Fungsi untuk membuat satu review item (satu slide)
function createReviewItem({ name, title, comment, imgSrc, delay = "0s" }) {
	return `
	  <div class="swiper-slide">
		 <div class="reviews-item wow fadeInUp" data-wow-delay="${delay}">
			<div class="reviews-thumb">
			  <img src="${imgSrc}" alt="${name}">
			</div>
			<div class="reviews-body">
			  <div class="reviews-name">${name}</div>
			  <div class="reviews-profi">${title}</div>
			  <div class="reviews-comment">${comment}</div>
			  <div class="reviews-social">
				 ${createSocialIcons()}
			  </div>
			</div>
		 </div>
	  </div>
	`;
 }
 
 // Fungsi untuk membuat blok icon sosial media
 function createSocialIcons() {
	const icons = [
	  { src: "images/social-vk-gray.svg", alt: "Вконтакте" },
	  { src: "images/social-facebook-gray.svg", alt: "Facebook" },
	  { src: "images/social-telegram-gray.svg", alt: "Telegram" },
	];
	return icons
	  .map(icon => `<a href="#"><img src="${icon.src}" alt="${icon.alt}"></a>`)
	  .join("");
 }
 
 // Fungsi utama untuk merender seluruh review swiper
 export function Review() {
	// Daftar review user
	const reviews = [
	  {
		 name: "Konstantin Kuzmin",
		 title: "Founder of LIFECONST",
		 comment: "I was very impressed with the result that I ordered. Construction Company has fulfilled all my expectations!",
		 imgSrc: "images/client-1.jpg",
		 delay: "0.2s"
	  },
	  {
		 name: "Rakesh Juggernaut",
		 title: "Director of the BRUK shopping center",
		 comment: "Ordered design for our building. I am very pleased with the result. The company treats its customers responsibly",
		 imgSrc: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		 delay: "0.3s"
	  },
	  {
		 name: "Zabava Lukia",
		 title: "Commercial director of MAGNUM",
		 comment: "I wanted to renovate my office. Booked a home repair service. The guys took care of me from start to finish. I recommend!",
		 imgSrc: "images/client-3.jpg",
		 delay: "0.4s"
	  },
	  {
		 name: "Kira Dorova",
		 title: "AUDITSTROY department manager",
		 comment: "Construction has fulfilled all my expectations. I was very impressed with the result that I ordered.",
		 imgSrc: "images/client-4.jpg"
	  },
	  {
		 name: "Alex Pakovsky",
		 title: "Founder of INVESTBASK company",
		 comment: "I ordered a renovation for my office from Construction. Everyone did great. I recommend this company.",
		 imgSrc: "images/client-5.jpg"
	  },
	  {
		 name: "Dina Cvetova",
		 title: "Store owner FLOWERSMARK",
		 comment: "For a long time I was looking for solutions for the project I wanted to implement, but Construction helped me with this. Highly recommend!",
		 imgSrc: "images/client-6.jpg"
	  }
	];
 
	// Gabungkan semua review ke dalam satu swiper-wrapper
	const reviewSlides = reviews.map(createReviewItem).join("");
 
	const content = `
	  <div class="container">
		 <h2 class="center-title color-white wow fadeIn" data-wow-delay="0.1s">What clients say</h2>
		 <div class="swiper reviews-swiper">
			<div class="swiper-wrapper">
			  ${reviewSlides}
			</div>
			<div class="swiper-pagination"></div>
		 </div>
	  </div>
	`;
 
	// Inisialisasi event jika diperlukan, untuk saat ini kita set sebagai kosong atau null
	const event = null;
 
	// Return objek dengan content dan event
	return { content, event };
 }
 