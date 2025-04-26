function createGalleryItem(imageUrl, altText, delay) {
	return `
	  <a href="${imageUrl}" class="gallery-item wow fadeIn" data-effect="mfp-zoom-in" data-wow-delay="${delay}s">
		 <span class="gallery-border"></span>
		 <img src="${imageUrl}" alt="${altText}">
	  </a>
	`;
 }
 
 export function Gallery() {
	const images = [
	  { src: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Image 1", delay: 0.2 },
	  { src: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Image 2", delay: 0.3 },
	  { src: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Image 3", delay: 0.4 },
	  { src: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Image 4", delay: 0.5 },
	  { src: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Image 5", delay: 0.6 },
	  { src: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Image 6", delay: 0.7 },
	  { src: "images/gallery-7.jpg", alt: "Image 7", delay: 0.2 },
	  { src: "images/gallery-8.jpg", alt: "Image 8", delay: 0.3 },
	  { src: "images/gallery-9.jpg", alt: "Image 9", delay: 0.4 },
	  { src: "images/gallery-10.jpg", alt: "Image 10", delay: 0.5 },
	  { src: "images/gallery-11.jpg", alt: "Image 11", delay: 0.6 },
	  { src: "images/gallery-12.jpg", alt: "Image 12", delay: 0.7 }
	];
 
	const content = `
	  <div class="container">
		 <h2 class="center-title wow fadeIn" data-wow-delay="0.1s">Our Product</h2>
		 <div class="gallery-wrap">
			${images.map(image => createGalleryItem(image.src, image.alt, image.delay)).join('')}
		 </div>
		 <div class="gallery-btn">
			<a href="#" class="def-btn wow fadeInUp" data-wow-delay="0.2s">Show more</a>
		 </div>
	  </div>
	`;

	const events = [
		{
		  selector: '.gallery-btn a',
		  type: 'click',
		  handler: (e) => {
			 e.preventDefault();
			 console.log('Show more clicked');
			 // Tambahkan logika untuk menampilkan gambar lebih banyak atau melakukan aksi lain.
		  }
		}
	 ];

	return {content, event}
 }
 