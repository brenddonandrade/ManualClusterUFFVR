export default function initAccordionSistemas() {
    const accordionListSistemas = document.querySelectorAll('.sistemas');
    // console.log(accordionListSistemas);
    if (accordionListSistemas.length) {
        //verifica se existe pora nao bugar o js
        accordionListSistemas[0].classList.add('ativo');
        accordionListSistemas[0].nextElementSibling.classList.add('ativo');

        function activeAccordion(event) {
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }

        accordionListSistemas.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
