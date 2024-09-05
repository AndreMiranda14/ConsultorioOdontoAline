 // Função para definir a data atual no campo de data
 function definirDataAtual() {
    const campoData = document.getElementById('data');
    const hoje = new Date().toISOString().split('T')[0]; // Obtém a data atual no formato YYYY-MM-DD
    campoData.value = hoje;
}

// Chama a função quando a página carrega
document.addEventListener('DOMContentLoaded', definirDataAtual);

document.getElementById("print-button").addEventListener("click", function () {
    // Coletar os dados do formulário
    var titulo = document.getElementById("titulo").value;
    var texto = document.getElementById("texto").value;
    var data = document.getElementById("data").value;

    function formatDate(dateString) {
        const months = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        const date = new Date(dateString);
    
        // Use o método getUTCDate() se a data for no UTC ou ajuste conforme necessário
        const day = date.getUTCDate();
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear();
    
        return `${day} de ${month} de ${year}`;
    }

    function escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br>')
            .replace(/ {2}/g, '&nbsp;&nbsp;');
    }

    // Formatar a data
    var formattedDate = formatDate(data);

    // Criar o template de impressão
    var template = `
    <html>
        <head>
            <title>Imprimir</title>
            <style>
                @page {
                    size: A4;
                    margin: 0;
                }
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                body { 
                    font-family: 'Poppins', sans-serif;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                }

                .container {
                    width: 100vw;
                    height: 100vh;
                }

                .title {
                    font-size: 22px;
                    color: #0158A4;
                    margin-top: 35px; 
                    font-weight: bold;
                    text-transform: uppercase;
                    text-align: center;
                }

                .header {
                    margin-bottom: 25px;
                }
                
                .img1{
                    display: block;
                    width: 350px;
                    height: 150px;
                    position: absolute;
                    margin: 20px 0px 20px 20px;
                }
                    
                .img2{
                    display: block;
                    width: 450px;
                    height: 88px;
                    position: absolute;
                    margin: 55px 0px 55px 505px;
                }
                        
                .background {
                    display: flex;
                    margin-top: 0;
                    position: static;
                    width: 1000px;
                    height: 191px;
                    z-index: -1;
                }
                        
                .imagem_fundo {
                    position: absolute;
                    width: 600px;
                    z-index: -10;
                    margin: 200px 0px 0px 400px;
                }

                .content {
                    font-size: 20px;
                    margin-top: 10px;
                    color: #0158A4;
                    text-align: justify;
                    padding: 50px;
                    line-height: 30px;
                }

                .assinatura{
                    text-align: center;
                }

                .img-assinatura{
                    position: relative;
                    width: 240px;
                    margin: 0 auto;
                }

                .data{
                    margin_top: 35px;
                    text-align: center;
                    font-size: 20px;
                    color: #0158A4;
                }

            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img src="/images/Timbrado/Logotipo.svg" alt="Logotipo" class="img1">
                    <img src="/images/Timbrado/Endereco_bg.svg" alt="Endereço" class="img2">
                    <img src="/images/Timbrado/fundo_azul_bg.svg" alt="Logotipo" class="background">
                </div>

                <div>
                    <img src="/images/Timbrado/Background-png.svg" alt="imagem de fundo" class="imagem_fundo">
                </div>

                <div class="title">${escapeHtml(titulo)}</div>
                <div class="content">${escapeHtml(texto)}</div>
                <div class="data">Belo Horizonte, ${formattedDate}</div>
                
                <div class="assinatura">
                    <img src="/images/Timbrado/Assinatura.svg" alt="Assinatura" class="img-assinatura">
                </div>
            </div>
        </body>
    </html>
    `;

    // Abrir uma nova janela e inserir o template
    var printWindow = window.open("", "", "height=800,width=1000");
    printWindow.document.open();
    printWindow.document.write(template);
    printWindow.document.close();

    // Esperar que o conteúdo seja carregado e chamar print
    printWindow.onload = function () {
        printWindow.print();
    };
});
