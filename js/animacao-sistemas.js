export default function initAccordionSistemas() {
    const accordionListSistemas = document.querySelectorAll('.sistemas');
    if (accordionListSistemas.length) {
        //verifica se existe pora nao bugar o js
        const firstItem = accordionListSistemas[0];
        firstItem.classList.add('ativo');
        const itemAtivo = firstItem.dataset.select;
        const item = document.getElementById(itemAtivo)
        item.classList.add('ativo');

        function activeAccordion(event) {
            accordionListSistemas.forEach(elemento => {
                if (elemento.classList.contains('ativo')) {
                    elemento.classList.remove('ativo');
                    let itemSelect = elemento.dataset.select;
                    let item = document.getElementById(itemSelect);
                    item.classList.remove('ativo');
                }

            });
            this.classList.add('ativo');
            let itemSelect = this.dataset.select;
            console.log(itemSelect);
            let item = document.getElementById(itemSelect);
            item.classList.add('ativo');

        }

        accordionListSistemas.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
