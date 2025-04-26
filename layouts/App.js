// File: layouts/App.js

// Fungsi Initialize Application
import { Section } from "../utils/Sections.js";
import { ModalForm } from "../components/ModalForm.js";
import { ModalButtonGoUp } from "../components/ModalButtonGoUp.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

import { Home } from "../contents/Home.js";
import { About } from "../contents/About.js";
import { Numbers } from "../contents/Numbers.js";
import { Services } from "../contents/Services.js";
import { Gallery } from "../contents/Gallery.js";
import { Why } from "../contents/Why.js";
import { Team } from "../contents/Team.js";
import { Review } from "../contents/Review.js";
import { Partner } from "../contents/Partner.js";
import { Form } from "../contents/Form.js";


export function initApp(rootElement) {
  const sections = [
    { className: "s-banner", sectionId: "", ...Home() },
    { className: "s-about", sectionId: "s-about", ...About() },
    { className: "s-number", sectionId: "s-number", ...Numbers() },
    { className: "s-services", sectionId: "s-services", ...Services() },
    { className: "s-gallery", sectionId: "s-gallery", ...Gallery() },
    { className: "s-why", sectionId: "s-why", ...Why() },
    { className: "s-team", sectionId: "s-team", ...Team() },
    { className: "s-review", sectionId: "s-testimonials", ...Review() },
    { className: "s-partner", sectionId: "s-partners", ...Partner() },
    { className: "s-form", sectionId: "s-contact", ...Form() },
  ];

  rootElement.innerHTML = `
    <div class="app">
      ${ModalForm()}
      ${ModalButtonGoUp()}
      <header id="header" class="site-header">${Header()}</header>
      <main id="main">
        ${sections.map(({ className, sectionId, content, events }) =>
          Section(className, sectionId, content, events)
        ).join("")}
      </main>
      <footer id="footer" class="site-footer">${Footer()}</footer>
    </div>
  `;
}


/* 
 
            ${Section('s-why', 's-why', Why())}
            ${Section('s-team', 's-team', Team())}
            ${Section('s-review', 's-testimonials',  Preview())}
            ${Section('s-partner', 's-partners', Partner())}
            ${Section('s-form', 's-contact',  Form())} */