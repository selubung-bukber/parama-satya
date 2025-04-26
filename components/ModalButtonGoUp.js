export function ModalButtonGoUp() {
	 const goUpButtonData = {
		href: "#",
		imgSrc: "images/arrow-up.svg",
		imgAlt: "Go up"
	 };
	 
   return `  
	<div class="go-up">
      <a href="${goUpButtonData.href}">
        <img src="${goUpButtonData.imgSrc}" alt="${goUpButtonData.imgAlt}">
      </a>
    </div>`
}



