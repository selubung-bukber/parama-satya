// Fungsi untuk membuat satu item partner
function createPartnerItem(partner) {
	return `
	  <div class="partners-item">
		 <img src="${partner.src}" alt="${partner.name || 'Partner'}">
	  </div>
	`;
 }
 
 // Fungsi utama untuk merender seluruh partner
 export function Partner() {
	const partners = [
	  { name: "Partner A", src: "https://www.pertamina.com/landing/images/logo.png" },
	  { name: "Partner B", src: "https://id.joblum.com/uploads/12/11441.jpg" },
	  { name: "Partner C", src: "https://www.liblogo.com/img-logo/ex5112e4fe-exxon-logo-exxon-logo-timeline-wiki-.png" },
	  { name: "Partner D", src: "https://www.pt-ssa.co.id/wp-content/uploads/2021/12/PT-Shell-Indonesia.jpg" },
	  { name: "Partner E", src: "https://1000logos.net/wp-content/uploads/2020/06/PetroChina-Logo-1080x608.png" },
	  { name: "Partner A", src: "https://1000logos.net/wp-content/uploads/2017/12/Chevron-Logo-500x281.png" },
	  { name: "Partner B", src: "https://1000logos.net/wp-content/uploads/2024/08/Caltex-Logo-500x281.png" },
	  { name: "Partner C", src: "https://1000logos.net/wp-content/uploads/2024/08/MAPCO-Logo-500x281.png" },
	  { name: "Partner D", src: "https://1000logos.net/wp-content/uploads/2024/08/Lukoil-Logo-500x281.png" },
	  { name: "Partner E", src: "https://1000logos.net/wp-content/uploads/2024/08/Adnoc-Logo-500x281.png" },
	];
 
	const partnerItems = partners.map(createPartnerItem).join("");  // Menghasilkan semua item partner
 
	// Menyusun konten HTML untuk partner
	const content = `<div class="partners-row">${partnerItems}</div>`;
 
	// Array kosong untuk event handler (dapat diubah sesuai kebutuhan)
	const event = [];
 
	// Mengembalikan objek dengan content dan events
	return { content, event };
 }
 