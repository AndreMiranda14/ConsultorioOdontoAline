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
    var nome = document.getElementById("nome").value;
    var receita = document.getElementById("receita").value;
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
                    size: A5;
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
                    border-radius: 10px;
                    box-shadow: 5px 5px 3px rgba(0,0,0,0.4); 
                }

                .title {
                    font-size: 22px; 
                    font-weight: bold;
                    text-transform: uppercase;
                    text-align: center;
                    color: #0158a4;
                }

                .name {
                    margin-top: 50px;
                    font-size: 18px; 
                    text-align: justify;
                    margin-left: 50px;
                    color: #0158a4;
                }

                .header {
                    display: flex;
                    justify-content: left;  
                    background-color: #0158a4;
                    margin-bottom: 25px;
                    border-radius: 10px 10px 0 0;
                }
    
                .img{
                    display: inline;
                    width: 275px;
                    height: 130px;
                }

                .content {
                    font-size: 16px; 
                    margin-top: 5px; 
                    text-align: justify;
                    padding: 50px;
                    color: #0158a4;
                }

                #imagem-fundo {
                    position: absolute;
                    background: url("/images/Timbrado/Background-png.svg") bottom right no-repeat;
                    background-color: #fff;
                    background-size: 260px;
                }

                .assinatura{
                    text-align: center;
                }

                .img-assinatura{
                    position: relative;
                    width: 150px;
                    margin: 0 auto;
                }
                    
                .data{
                    text-align: center;
                    font-size: 16px; 
                    color: #0158a4;
                }

            </style>
        </head>
        <body>
            <div class="container" id="imagem-fundo">
                <div class="header">
                    <img src="/images/Timbrado/Logotipo.svg" alt="Logotipo" class="img">
                    <img src="/images/Timbrado/Endereco-sm.svg" alt="Endereço" class="img">
                </div>
                        <div class="title">Receituário</div>
                        <div class="name">${escapeHtml(nome)}</div>
                        <div class="content">${escapeHtml(receita)}</div>
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
