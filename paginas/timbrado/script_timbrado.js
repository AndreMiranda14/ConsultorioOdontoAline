document.getElementById('print-button').addEventListener('click', function() {
    // Coletar os dados do formulário
    var titulo = document.getElementById('titulo').value;
    var texto = document.getElementById('texto').value;

    // Criar o template de impressão
    var template = `
        <html>
        <head>
            <title>Imprimir</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .container { width: 100%; }
                .title { font-size: 24px; font-weight: bold; }
                .content { font-size: 18px; margin-top: 10px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="title">${titulo}</div>
                <div class="content">${texto}</div>
            </div>
        </body>
        </html>
    `;

    // Abrir uma nova janela e inserir o template
    var printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.open();
    printWindow.document.write(template);
    printWindow.document.close();

    // Esperar que o conteúdo seja carregado e chamar print
    printWindow.onload = function() {
        printWindow.print();
    };
});

document.getElementById('generate-pdf').addEventListener('click', function() {
    var element = document.getElementById('formulario');
    var opt = {
        margin: 1,
        filename: 'formulario.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
});