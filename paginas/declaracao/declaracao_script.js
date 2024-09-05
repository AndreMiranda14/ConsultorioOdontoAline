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
    var data_tratamento = document.getElementById("data_tratamento").value;
    var hora_inicial = document.getElementById("hora_inicial").value;
    var hora_final = document.getElementById("hora_final").value;
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
    var data_formatada = formatDate(data);
    var data_tratamento_formatada = formatDate(data_tratamento);

    // Criar o template de impressão
    var template = 
    `<html>
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

            .header {
                margin-bottom: 25px;
            }

            .img_bg{
                width: 275px;
                height: 130px;  
            }

            .background{
                display: flex;
                margin-top: 0;
                position: static;
            }

            .img1{
                display: block;
                width: 275px;
                height: 130px;
                position: absolute;
            }
            
            .img2{
                display: block;
                width: 275px;
                height: 130px;
                position: absolute;
                margin-left: 285px;
            }

            .content {
                font-size: 18px;
                margin-top: 5px; 
                display: flex;
                padding: 50px;
                color: #0158a4;
                line-height: 35px;
                text-align: justify;
            }
            
            .imagem_fundo {
                position: absolute;
                width: 260px;
                z-index: -1;
                margin: 250px 0px 0px 313px;
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
                font-size: 18px;
                color: #0158a4;
            }
            
            .nome {}

        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="/images/Timbrado/Logotipo.svg" alt="Logotipo" class="img1">
                <img src="/images/Timbrado/Endereco-sm.svg" alt="Endereço" class="img2">
                <img src="/images/Timbrado/fundo_azul.svg" alt="Logotipo" class="background">
            </div>
            
            <div>
                <img src="/images/Timbrado/Background-png.svg" alt="imagem de fundo" class="imagem_fundo">
            </div>

            <div class="title">Declaração de Comparecimento</div>

            <div class="content">
                Declaro para os fins que ${escapeHtml(nome)} esteve em tratamento 
                odontológico no dia ${escapeHtml(data_tratamento_formatada)}, 
                das ${escapeHtml(hora_inicial)} às ${escapeHtml(hora_final)}.
            </div>


            <div class="data">Belo Horizonte, ${data_formatada}</div>

            <div class="assinatura">
                <img src="/images/Timbrado/Assinatura.svg" alt="Assinatura" class="img-assinatura">
            </div>

        </div>
    </body>
</html>`;

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
