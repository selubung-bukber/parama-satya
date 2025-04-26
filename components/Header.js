// components/Header.js
import {
   logoData,
   addressData,
   phoneData,
   socialMediaData,
   navLinksData
 } from "../data/route.js";
 
 // Logo
 const renderLogo = () => {
   return `<a href="#">
     <img src="${logoData.src}" width="${logoData.width}" alt="${logoData.alt}">
   </a>`;
 };
 
 // Alamat
 const renderAddress = () => {
   return addressData.map(loc => `
     <img src="${loc.source}" alt="${loc.alt}">
     <span>${loc.text}</span>
   `).join('');
 };
 
 // Telepon
 const renderPhone = () => {
   return phoneData.map(p => `
     <img src="${p.source}" alt="${p.phone}">
     <span>${p.phone}</span>
   `).join('');
 };
 
 // Social Media
 const renderSocials = () => {
   return socialMediaData.map(s => `
     <a href="${s.href}">
       <img src="${s.source}" alt="${s.alt}"/>
     </a>
   `).join('');
 };
 
 // Navigasi
 const renderNavLinks = () => {
   return navLinksData.map(link => `
     <li><a class="anchor-link" href="${link.href}">${link.text}</a></li>
   `).join('');
 };
 
 // Komponen Utama
 export function Header() {
   const address = renderAddress();
   const phone = renderPhone();
   const socials = renderSocials();
   const nav = renderNavLinks();
   const logo = renderLogo();
   const phoneHref = phoneData[0].phone; // ambil nomor utama
 
   return `
     <div class="header-top">
       <div class="container">
         <div class="header-row">
           <div class="header-mobile-logo">${logo}</div>
           <div class="hamburger"><span></span><span></span></div>
           <div class="header-desc">Specialize in chemical corrosives</div>
           <div class="header-right">
             <div class="header-info">${address}</div>
             <a href="tel:${phoneHref}" class="header-info">${phone}</a>
             <div class="header-social">${socials}</div>
           </div>
         </div>
       </div>
     </div>
 
     <div class="header-bottom">
       <div class="container">
         <div class="header-bottom-row">
           <div class="header-logo">${logo}</div>
           <nav class="header-nav">
             <ul>${nav}</ul>
           </nav>
         </div>
       </div>
     </div>
 
     <div class="header-mobile-wrap">
       <nav class="header-mobile-nav">
         <ul>${nav}</ul>
       </nav>
       <div class="header-mobile-info">${address}</div>
       <a href="tel:${phoneHref}" class="header-mobile-info">${phone}</a>
       <div class="header-mobile-social">${socials}</div>
     </div>
   `;
 }
 