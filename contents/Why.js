export function Why() {
	const features = [
	  {
		 title: 'Quality materials',
		 icon: 'images/check-mark.svg',
		 delayIcon: '0.3s',
		 delayTitle: '0.4s',
		 delayDesc: '0.5s',
		 desc: `
			✅ Kualitas Bahan Terbaik
 
			Kami hanya menggunakan formulasi bahan kimia pilihan yang telah melalui pengujian ketat. Setiap produk kami dirancang untuk bekerja optimal di lingkungan paling menantang—mulai dari paparan air laut, panas ekstrem, hingga bahan kimia agresif.
 
			- Tahan lama, efektif, dan stabil  
			- Aman untuk berbagai jenis logam  
			- Terstandar dan sesuai regulasi industri
		 `,
	  },
	  {
		 title: 'Modern Construction',
		 icon: 'images/check-mark.svg',
		 delayIcon: '0.3s',
		 delayTitle: '0.4s',
		 delayDesc: '0.5s',
		 desc: `
			🤝 Layanan yang Bisa Diandalkan
 
			Kami tak hanya jual produk, kami temani Anda dari awal sampai tuntas. Mulai dari pemilihan produk, pengujian di lapangan, hingga pendampingan teknis—tim kami siap bantu dengan solusi yang tepat sasaran.
 
			- Fast response & konsultasi teknis gratis  
			- Dukungan langsung di lapangan (jika dibutuhkan)  
			- Komitmen terhadap kepuasan dan keamanan jangka panjang
		 `,
	  },
	];
 
	// Menghasilkan HTML untuk fitur
	const renderedFeatures = features
	  .map(
		 (item, index) => `
			<div class="why-features-item">
			  <div class="why-features-icon wow fadeInLeft" data-wow-delay="${item.delayIcon}">
				 <img src="${item.icon}" alt="Check mark">
			  </div>
			  <div class="why-features-right">
				 <div class="why-features-title wow fadeInRight" data-wow-delay="${item.delayTitle}">
					${item.title}
				 </div>
				 <div class="why-features-desc wow fadeInRight" data-wow-delay="${item.delayDesc}">
					${item.desc}
				 </div>
			  </div>
			</div>
		 `
	  )
	  .join('');
 
	// Konten untuk komponen Why
	const content = `
	  <div class="container">
		 <div class="why-row">
			<div class="why-left">
			  <h2 class="def-title wow fadeInLeft" data-wow-delay="0.1s">Why us?</h2>
			  <div class="def-desc wow fadeInLeft" data-wow-delay="0.2s">
				 Each color evokes different emotions in each person. <br> Your emotions still depend on your individual life experience.
			  </div>
 
			  <div class="why-features">
				 ${renderedFeatures}
			  </div>
			</div>
 
			<div class="why-right">
			  <img src="images/why-bg.jpg" alt="Why us?" class="wow fadeIn" data-wow-delay="0.6s">
			</div>
		 </div>
	  </div>
	`;
 
	// Event handling jika dibutuhkan
	const event = [
	  {
		 selector: '.why-features-item',
		 type: 'click',
		 handler: (e) => {
			console.log('Feature clicked:', e.target);
		 },
	  },
	];
 
	return { content, event };
 }
 