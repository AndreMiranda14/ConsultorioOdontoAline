document.getElementById('monetary-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amountInput = document.getElementById('amount').value;
    const resultElement = document.getElementById('result');
    
    const amount = parseFloat(amountInput.replace('R$', '').replace(',', '.').trim());
    
    if (isNaN(amount)) {
        resultElement.textContent = 'Por favor, insira um valor válido.';
        return;
    }
    
    resultElement.textContent = convertNumberToWords(amount);
});

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

    if (integerPart >= 1000) {
        const thousand = Math.floor(integerPart / 1000);
        const rest = integerPart % 1000;
        if (thousand === 1) {
            result += 'mil';
        } else {
            result += integerToWords(thousand) + ' mil';
        }
        if (rest > 0) result += ' e ' + integerToWords(rest);
    } else if (integerPart > 0) {
        result += integerToWords(integerPart);
    }

    if (decimalPart > 0) {
        result += ' e ' + integerToWords(decimalPart) + ' centavos';
    } else if (integerPart === 0) {
        result = 'zero reais';
    } else {
        result += ' reais';
    }

    return result.charAt(0).toUpperCase() + result.slice(1);
}
