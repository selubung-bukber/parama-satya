// export function Section(className, sectionId, content, events = []) {
//    // Template string untuk HTML section
//    const sectionHTML = `
//        <section id="${sectionId}" class="${className}">
        
//            ${content}
//        </section>
//    `;

//    // Set event listeners dinamis setelah HTML di-render
//    setEventListeners(events);

//    return sectionHTML;
// }

// // Fungsi untuk menangani event listeners dinamis
// function setEventListeners(events) {
//    events.forEach(event => {
//        const { selector, type, handler, isAsync = false } = event;

//        // Ambil elemen yang sesuai dengan selector
//        const element = document.querySelector(selector);
//        if (element) {
//            element.addEventListener(type, isAsync ? async (e) => await handler(e) : handler);
//        }
//    });
// }
export function Section(className, sectionId, content, events = []) {
    const sectionHTML = `
      <section id="${sectionId}" class="${className}">
        ${content}
      </section>
    `;
  
    // Jalankan setelah section dirender
    requestAnimationFrame(() => setEventListeners(events));
  
    return sectionHTML;
  }
  
  function setEventListeners(events) {
    events.forEach(event => {
      const { selector, type, handler, isAsync = false } = event;
      const element = document.querySelector(selector);
      if (element) {
        element.addEventListener(type, isAsync ? async (e) => await handler(e) : handler);
      }
    });
  }
  