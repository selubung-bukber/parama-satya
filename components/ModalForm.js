

export function ModalForm() {

	//  Data untuk modal form
	const modalFormData = {
		logoSrc: "../images/parampong.png",
		logoAlt: "Parampong",
		closeIconSrc: "images/close.svg",
		closeAlt: "Close",
		title: "Request a call",
		fields: [
		  { type: "text", placeholder: "Your name*", required: true },
		  { type: "text", placeholder: "Your phone*", required: true }
		],
		buttonText: "Send"
	 };

	// Modal form fields
  const formFields = modalFormData.fields.map(field => `
    <input 
      type="${field.type}" 
      placeholder="${field.placeholder}" 
      ${field.required ? 'required' : ''} />
  `).join("");

  return `
   <div class="modal-form mfp-hide mfp-with-anim" id="modal-form">

      <div class="modal-form-head">
        <div class="modal-form-logo">
          <img src="${modalFormData.logoSrc}" alt="${modalFormData.logoAlt}" style="width:120px">
        </div>
        <div class="modal-form-close">
          <img src="${modalFormData.closeIconSrc}" alt="${modalFormData.closeAlt}">
        </div>
      </div>

      <div class="modal-form-body">
        <div class="modal-form-title">${modalFormData.title}</div>
        <form>
          ${formFields}
          <button class="form-button">${modalFormData.buttonText}</button>
        </form>
      </div>
      	</div>
   
  `;
}
