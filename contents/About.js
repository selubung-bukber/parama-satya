
// export function About() {
// 	const textAbout = [{
// 		text:"PT Parama Parampong, kami percaya perlindungan terbaik dimulai dari hal kecil—seperti sambungan baut dan mur yang sering terlupakan, tapi punya peran besar. Karena itu, kami hadir khusus untuk membantu industri menghadapi tantangan korosi di titik-titik krusial tersebut Dengan produk bahan kimia anti-korosi yang kami kembangkan secara khusus, kami bantu memastikan sambungan Anda tetap kuat, tahan lama, dan bebas dari karat. Baik itu di tengah panasnya kilang migas, kerasnya laut, atau sibuknya pabrik manufaktur, solusi kami siap mendukung performa alat dan keandalan sistem Anda.Kami bukan sekadar supplier. Kami partner yang siap bantu dari pemilihan produk, uji coba di lapangan, sampai pelatihan penggunaannya. Karena kami tahu, menjaga sambungan tetap prima berarti menjaga keseluruhan sistem tetap jalan.Kuat di sambungan, aman di keseluruhan.Itulah misi kami."
// 	}]

// 	const dataAbout = [
// 		{	url: "https://images.pexels.com/photos/15970032/pexels-photo-15970032/free-photo-of-oil-refinery-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
// 			title: "About our company", 
// 			textBold: "Parama Satya",
// 			text: textAbout[0].text,
// 			buttonOrder:"Order Services"
// 		},
// 	]
//   return `	
//   <div class="container">

// 			<div class="about-row">
// 				<div class="about-left">
// 					<h2 class="def-title wow fadeInLeft" data-wow-delay="0.2s">${dataAbout[1].title}</h2>
// 					<div class="def-desc wow fadeInLeft" data-wow-delay="0.3s">
// 						<strong>${dataAbout[2].textBold}</strong> ${dataAbout[3].text}
// 					</div>
// 					<a href="#s-services" class="def-btn anchor-link wow fadeInLeft" data-wow-delay="0.4s">${dataAbout[4].buttonOrder}</a>
// 				</div>
	
// 				<div class="about-right">
// 					<img src="${dataAbout[0].url}" alt="background About" class="wow fadeIn" data-wow-delay="0.5s">
// 				</div>
// 			</div>

// 		</div>`
// }


// About.js
export function About() {
	const textAbout = [{
	  text: ", kami percaya perlindungan terbaik dimulai dari hal kecil—seperti sambungan baut dan mur yang sering terlupakan, tapi punya peran besar. Karena itu, kami hadir khusus untuk membantu industri menghadapi tantangan korosi di titik-titik krusial tersebut. Dengan produk bahan kimia anti-korosi yang kami kembangkan secara khusus, kami bantu memastikan sambungan Anda tetap kuat, tahan lama, dan bebas dari karat. Baik itu di tengah panasnya kilang migas, kerasnya laut, atau sibuknya pabrik manufaktur, solusi kami siap mendukung performa alat dan keandalan sistem Anda. Kami bukan sekadar supplier. Kami partner yang siap bantu dari pemilihan produk, uji coba di lapangan, sampai pelatihan penggunaannya. Karena kami tahu, menjaga sambungan tetap prima berarti menjaga keseluruhan sistem tetap jalan. Kuat di sambungan, aman di keseluruhan. Itulah misi kami."
	}];
 
	const dataAbout = [
	  { url: "https://images.pexels.com/photos/15970032/pexels-photo-15970032/free-photo-of-oil-refinery-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
		 title: "About our company", 
		 textBold: "PT Parama Satya",
		 text: textAbout[0].text,
		 buttonOrder: "Order Services"
	  },
	];
 
	const content = `
	  <div class="container">
		 <div class="about-row">
			<div class="about-left">
			  <h2 class="def-title wow fadeInLeft" data-wow-delay="0.2s">${dataAbout[0].title}</h2>
			  <div class="def-desc wow fadeInLeft" data-wow-delay="0.3s">
				 <strong>${dataAbout[0].textBold}</strong> ${dataAbout[0].text}
			  </div>
			  <a href="#s-services" class="def-btn anchor-link wow fadeInLeft" data-wow-delay="0.4s">${dataAbout[0].buttonOrder}</a>
			</div>
			<div class="about-right">
			  <img src="${dataAbout[0].url}" alt="background About" class="wow fadeIn" data-wow-delay="0.5s">
			</div>
		 </div>
	  </div>
	`;
 
	const events = [];
 
	return { content, events };
 }
 