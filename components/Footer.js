import {
   logoData,
   addressData,
   phoneData,
   socialMediaData,
   footerServices,
   footerSchedule
 } from "../data/route.js";
 
 export function Footer() {
   const iconSocial = socialMediaData.map(social => `
     <a href="${social.href}">
       <img src="${social.source}" alt="${social.alt}" />
     </a>
   `).join("");
 
   const addressList = addressData.map(addr => `
     <div class="footer-info-item">
       <div class="footer-info-icon"><img src="${addr.source}" alt="${addr.alt}"></div>
       <div class="footer-info-text">${addr.text}</div>
     </div>
   `).join("");
 
   const phoneList = phoneData.map(phone => `
     <a href="tel:${phone.phone}" class="footer-info-item">
       <div class="footer-info-icon"><img src="${phone.source}" alt="Phone"></div>
       <div class="footer-info-text">${phone.phone}</div>
     </a>
   `).join("");
 
   const serviceList = footerServices.map(service => `<li><a href="#">${service}</a></li>`).join("");
 
   const scheduleList = footerSchedule.map(schedule => `<li>${schedule}</li>`).join("");
 
   return `
     <div class="container">
       <div class="footer-row">
 
         <div class="footer-left">
           <div class="footer-logo">
             <a href="#"><img src="${logoData.src}" width="${logoData.width}" alt="${logoData.alt}"></a>
           </div>
           <div class="footer-desc">
             <strong>Parampong</strong> is a full service building design company.
           </div>
         </div>
 
         <div class="footer-right">
           <nav class="footer-nav">
             <h5 class="footer-title">Our services</h5>
             <ul>${serviceList}</ul>
           </nav>
 
           <div class="footer-nav">
             <h5 class="footer-title">Schedule</h5>
             <ul>${scheduleList}</ul>
           </div>
 
           <div class="footer-nav">
             <h5 class="footer-title">Contacts</h5>
             ${addressList}
             ${phoneList}
             <div class="footer-social">${iconSocial}</div>
           </div>
         </div>
 
       </div>
 
       <div class="footer-copyright">
         <div class="copyright-text">
           Copyright © 2025 PT Parama-Satya. All rights reserved
         </div>
       </div>
     </div>
   `;
 }
 