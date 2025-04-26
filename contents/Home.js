export function Home() {
   const slogans = [
     { text: "Lindungi Setiap Ulir, Lawan Korosi Sejak Dini!" },
     { text: "Ketahanan Dimulai dari Sambungan Terkecil" },
     { text: "Bolt & Nut Tahan Lama, Produksi Tetap Prima" }
   ];
 
   const imagesBanner = [
     {
       url: "https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       subtitle: "Certified Company",
       bannerBold: "Parama Satya",
       bannerTitle: slogans[0].text,
       textButton: "View Services"
     },
     {
       url: "../images/banner-bg-2.jpg",
       subtitle: "Certified Company",
       bannerBold: "Parama Satya",
       bannerTitle: slogans[1].text,
       textButton: "View Services"
     },
     {
       url: "../images/banner-bg-3.jpg",
       subtitle: "Certified Company",
       bannerBold: "Parama Satya",
       bannerTitle: slogans[2].text,
       textButton: "View Services"
     }
   ];
 
   const Banners = imagesBanner.map(banner => `
     <div class="swiper-slide" style="background-image: url(${banner.url})">
       <div class="banner-content">
         <div class="banner-subtitle wow fadeIn" data-wow-delay="0.1s">${banner.subtitle}</div>
         <h2 class="banner-title wow fadeIn" data-wow-delay="0.2s"><strong>${banner.bannerBold}</strong></br> ${banner.bannerTitle}</h2>
         <a href="#s-services" class="banner-btn def-btn anchor-link wow fadeIn" data-wow-delay="0.3s">${banner.textButton}</a>
       </div>
     </div>
   `).join('');
 
   const content = `
     <div class="swiper banner-swiper">
       <div class="swiper-wrapper">
         ${Banners}
       </div>
       <div class="swiper-pagination wow fadeInUp" data-wow-delay="0.5s"></div>
       <div class="container">
         <div class="swiper-button-prev"></div>
         <div class="swiper-button-next"></div>
       </div>
     </div>
   `;
 
   const events = [
     {
       selector: '.swiper-button-prev',
       type: 'click',
       handler: (e) => {
         console.log('Prev clicked');
         // swiper.slidePrev()
       }
     },
     {
       selector: '.swiper-button-next',
       type: 'click',
       handler: (e) => {
         console.log('Next clicked');
         // swiper.slideNext()
       }
     }
   ];
 
   return { content, events };
 }
 