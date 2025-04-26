// Fungsi untuk membuat input form
function createFormInput(placeholder, type = 'text', required = false) {
	return `<input type="${type}" placeholder="${placeholder}" ${required ? 'required' : ''}>`;
 }
 
 // Fungsi untuk membuat textarea form
 function createTextArea(placeholder) {
	return `<textarea cols="30" rows="5" placeholder="${placeholder}"></textarea>`;
 }
 
 // Fungsi utama untuk merender form
 export function Form() {
	const images = ["https://images.pexels.com/photos/17728785/pexels-photo-17728785/free-photo-of-old-abandoned-factory-somewhere-in-belgium.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];  // Bisa ditambahkan gambar jika diperlukan
	const content = `
	  <div class="container">
		 <div class="form-row">
 
			<div class="form-left">
			  <h2 class="def-title">Do you have any questions?</h2>
			  <div class="def-desc">
				 Jika Anda memiliki pertanyaan atau ingin memesan layanan kami, silakan isi formulir di sebelah kanan. Tim kami siap membantu Anda kapan saja, dan akan menghubungi Anda kembali di hari yang sama.
			  </div>
			  <div class="form-image">
				 <img src="${images[0]}" alt="Feedback form">
			  </div>
			</div>
 
			<div class="form-right">
			  <form>
				 ${createFormInput('Your name*', 'text', true)}
				 ${createFormInput('Your phone*', 'text', true)}
				 ${createFormInput('Your email', 'email')}
				 ${createTextArea('Comment')}
				 <button class="def-btn form-button">Send</button>
			  </form>
			</div>
 
		 </div>
	  </div>
	`;
 
	// Inisialisasi event jika diperlukan
	const events = [];  // Bisa ditambahkan event handler jika diperlukan
 
	// Mengembalikan objek dengan content dan events
	return { content, events };
 }
 