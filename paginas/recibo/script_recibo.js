// Chama a função quando a página carrega
function definirDataAtual() {
    const campoData = document.getElementById('data');
    const hoje = new Date().toISOString().split('T')[0]; // Obtém a data atual no formato YYYY-MM-DD
    campoData.value = hoje;
}
document.addEventListener('DOMContentLoaded', definirDataAtual);

document.getElementById("print-button").addEventListener("click", function () {
    // Coletar os dados do formulário
    var nome = document.getElementById("nome").value;
    var documento = document.getElementById("documento").value;
    var referente = document.getElementById("referente").value;
    var valorInput = document.getElementById("amount").value;
    var data = document.getElementById("data").value;
    var amountInput = document.getElementById('amount').value;
    var resultElement = document.getElementById('result');
    
    var amount = parseFloat(amountInput.replace('R$', '').replace(',', '.').trim());
    
    if (isNaN(amount)) {
        resultElement.textContent = 'Por favor, insira um valor válido.';
        return;
    }

    var valorExtenso = resultElement.textContent = convertNumberToWords(amount);
    
    // Formatar os valores
    var dataFormatada = formatDate(data);
    var valorFormatado = formatarValor(valorInput);
    var documentoFormatado = formatarDocumento(documento);
    var nomeDocumento = '';
    
    if (documentoFormatado.length > 17) {
        nomeDocumento = 'CNPJ';
    } else {
        nomeDocumento = 'CPF';
    }
    // Exibir os dados (ou fazer algo com eles)

    function formatarValor(valorInput) {
        // Primeiro, converte o valor de string para número
        const numero = parseFloat(valorInput.replace(',', '.'));
        
        // Formata o número no formato desejado
        return numero.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
        }).replace('R$', ''); // Remove o símbolo "R$" se desejado
    }
    // Cria mascara para CPF ou CNPJ

    function formatarDocumento(documento) {
        // Remove todos os caracteres não numéricos
        documento = documento.replace(/\D/g, '');
        
        // Verifica o comprimento do documento e aplica a máscara correspondente
        if (documento.length === 11) {
            // Formatar CPF
            return documento.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

        } else if (documento.length === 14) {
            // Formatar CNPJ
            return documento.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        }
        
        // Retorna o documento sem formatação se não for CPF nem CNPJ
        return documento;
    }

    function convertNumberToWords(amount) {
        const units = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
        const teens = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
        const tens = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
        const hundreds = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
        
        const integerPart = Math.floor(amount);
        const decimalPart = Math.round((amount - integerPart) * 100);
    
        function integerToWords(num) {
            let result = '';
    
            if (num === 100) {
                return 'cem';
            } else if (num > 100) {
                const hundred = Math.floor(num / 100);
                const rest = num % 100;
                result += hundreds[hundred];
                if (rest > 0) result += ' e ' + integerToWords(rest);
            } else if (num >= 20) {
                const ten = Math.floor(num / 10);
                const unit = num % 10;
                result += tens[ten];
                if (unit > 0) result += ' e ' + units[unit];
            } else if (num >= 10) {
                result += teens[num - 10];
            } else if (num > 0) {
                result += units[num];
            }
    
            return result;
        }
    
        let result = '';
    
        if (integerPart > 1000) {
            const thousand = Math.floor(integerPart / 1000);
            const rest = integerPart % 1000;
            if (thousand === 1) {
                result += 'mil';
            } else {
                result += integerToWords(thousand) + ' mil';
            }
            if (rest > 0) result += ' ' + integerToWords(rest);
        } else if (integerPart > 0) {
            result += integerToWords(integerPart);
        }
    
        if (result.trim() === '') {
            result = 'zero';
        }
    
        result += ' reais';
    
        if (decimalPart > 0) {
            result += ' e ' + integerToWords(decimalPart) + ' centavos';
        } else if (decimalPart === 0 && integerPart === 0) {
            result = 'zero reais';
        } else {
            result += ' ';
        }
    
        return result.charAt(0).toUpperCase() + result.slice(1);
    }
    

    //Formata a data
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

    // Criar o template de impressão
    var template = 
    `<html>
<head>
    <title>Recibo ${nome}</title>
    <style>
        @page {
            size: 148mm 105mm;
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
            width: 98vw;
            height: 98vh;
            border-radius: 10px;
        }

        .title {
            font-size: 22px; 
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            color: #0158a4;
        }

        #header {
            display: flex;
            justify-content: space-between;
            padding: 5px 30px 10px 30px;
            align-items: center;
        }

        .recibo {
            font-size: 30px; 
            font-weight: 600;
            text-transform: uppercase;
            color: #0158a4;
            text-align: right;
            margin: 0;
        }
        
        .valor{
            border: 3px solid #0158a4;
            padding: 10px 10px 10px 40px;
            font-size: 22px; 
            color: #0158a4;  
            border-radius: 10px; 
            margin: 0;
        }

        .img{
            display: inline;
            width: 250px;
            height: 130px;
        }

        #content {
            font-size: 15px; 
            display: flex;
            padding: 0px 30px 0px 30px;
            color: #0158a4;
            text-align: justify;
        }
        
        .imagem_fundo {
            position: absolute;
            width: 240px;
            z-index: -1;
            margin: 0px 0px 0px 313px;
        }

        #img-assinatura{
            position: absolute;
            width: 151px;
            margin-left: 270px;
        }
            
        #data{
            margin: 30px 0px 15px 0px;
            text-align: center;
            font-size: 15px; 
            color: #0158a4;
        }
        
        #assinatura{
            font-size: 15px; 
            color: #0158a4;
        }

        #footer{
            display: flex;
            align-items: center;
            justify-content: left;
            margin-left: 80px;
        }

        #endereco {
            margin: 205px 0px 0px 7px;
            position: absolute;
            font-size: 12px; 
            color: #0158a4;
            text-align: center;
            }

        .instagram {
            font-weight: 600;
            text-decoration: underline;
        }

        </style>
    </head>
    <body>
        <div class="container">
            <div>
                <img src="/images/Timbrado/Background-png.svg" alt="imagem de fundo" class="imagem_fundo">
            </div>
        
            <div class="row" id="header">
                <div class="col-6" >
                    <img src="/images/Timbrado/Logotipo-azul.svg" alt="Logotipo" class="img">
                </div>


                <div class="col-6">
                    <p class="recibo">RECIBO</p>
                    <p class="valor">R$ ${valorFormatado}</p>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12" id="endereco">
                    Rua Edson Luiz de Miranda, 167, lojas 1 e 2, Maria Goretti, BH/MG - CEP: 31930-490 <BR>
                    Fone: (31) 3142-5141 | (31) 3646-6433 | (31) 98403-0911 
                    <span class="instagram">instagram.com/consultorioodontoaline</span>
                </div>
            </div>

            <div class="row">
                <div class="col-12" id="content">
                    Recebi de ${nome} ${nomeDocumento}: ${documentoFormatado}
                    a importância de ${valorExtenso}
                    referente a(o) ${referente}
                </div>
                <div class="col-12" id="data"> 
                    Belo Horizonte, ${dataFormatada}
                </div>
            </div>
        
            <div class="row" id="footer">
                <div class="col-6" id="assinatura">
                    <p>Assinatura e CPF/CNPJ: 067.113.256-30 </p>
                </div>
                <div class="col-6" id="img-assinatura">
                    <p><img src="/images/Timbrado/Assinatura.svg" alt="Assinatura" class="img-assinatura"></p>
                </div>
            </div>

        </div>
        
    </body>
    </html>`
    ;

    // Abrir uma nova janela e inserir o template
    var printWindow = window.open("", "", "height=500,width=1000");
    printWindow.document.open();
    printWindow.document.write(template);
    printWindow.document.close();

    // Esperar que o conteúdo seja carregado e chamar print
    printWindow.onload = function () {
        printWindow.print();
    };
});
