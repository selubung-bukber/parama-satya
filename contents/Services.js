export function Services() {
  const serviceList = [
    {
      url: 'https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Certified Company',
      desc: 'Experience the art of anti corrosion Parampong with our expert building services.',
      textButton: 'View Services',
    },
    {
      url: 'https://images.pexels.com/photos/5502745/pexels-photo-5502745.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Certified Company',
      desc: 'Experience the art of anti corrosion Parampong with our expert building services.',
      textButton: 'View Services',
    },
    {
      url: 'https://images.pexels.com/photos/4006763/pexels-photo-4006763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Certified Company',
      desc: 'Experience the art of anti corrosion Parampong with our expert building services.',
      textButton: 'View Services',
    },
    {
      url: 'https://images.pexels.com/photos/16442684/pexels-photo-16442684/free-photo-of-water-protection-pros-poland-coat-aquaproof-vision-fabric-lightweight-waterproof-and-flexible-fitted-with-reflective-tapes-to-increase-worker-visibility-knee-length-visibility-class-3.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Certified Company',
      desc: 'Experience the art of anti corrosion Parampong with our expert building services.',
      textButton: 'View Services',
    },
  ];

  // Membuat elemen untuk tiap layanan
  const renderedServices = serviceList
    .map(
      (service, index) => `
        <div class="services-item wow fadeIn" data-wow-delay="${0.1 * (index + 1)}s">
          <div class="services-thumb">
            <img src="${service.url}" alt="${service.title}">
          </div>
          <div class="services-body">
            <h4 class="services-title">${service.title}</h4>
            <div class="services-desc">
              <p>${service.desc}</p>
            </div>
            <a href="#modal-form" data-effect="mfp-zoom-in" class="def-btn services-btn">
              ${service.textButton}
            </a>
          </div>
        </div>
      `
    )
    .join('');

  // Konten layanan
  const content = `
    <div class="container">
      <h2 class="center-title wow fadeIn" data-wow-delay="0.1s">Our services</h2>
      <div class="services-row">
        ${renderedServices}
      </div>
    </div>
  `;

  // Event bisa ditambahkan jika ada interaksi yang perlu ditangani
  const event = [
    {
      selector: '.services-btn',
      type: 'click',
      handler: (e) => {
        // Event handler misalnya untuk membuka modal atau menunjukkan detail lebih lanjut
        console.log('View Service clicked');
      }
    }
  ];

  return { content, event };
}
