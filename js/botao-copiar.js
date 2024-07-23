export default function initCopiar() {
    document.addEventListener('DOMContentLoaded', () => {
        const scripts = document.querySelectorAll('.script');
        const buttons = document.querySelectorAll('.botaoCopiar');

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                copyToClipboard(scripts[index].innerText);
            });
        });

        function copyToClipboard(text) {
            // Crie um elemento temporário para copiar o texto
            const tempInput = document.createElement('textarea');
            tempInput.value = text;
            document.body.appendChild(tempInput);

            // Selecione e copie o texto
            tempInput.select();
            document.execCommand('copy');

            // Remova o elemento temporário
            document.body.removeChild(tempInput);

            // Mensagem de confirmação (opcional)
            alert('Texto copiado para o clipboard!');
        }
    });

}