export default function initCopiar() {
    document.addEventListener('DOMContentLoaded', () => {
        const scripts = document.querySelectorAll('.codigo');
        const spans = document.querySelectorAll('.botaoCopiar');

        spans.forEach((span, index) => {
            span.addEventListener('click', () => {
                copyToClipboard(scripts[index].innerText);
                var originalText = span.textContent;
                span.innerText = 'Copiado!';

                setTimeout(() => {
                    span.innerText = originalText;
                }, 3000);
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
            // alert('Texto copiado para o clipboard!');
        }
    });

}