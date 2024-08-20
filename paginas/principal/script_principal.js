function avancar() {
    const selectElement = document.getElementById('formSelect');
    const selectedValue = selectElement.value;
    

    if (selectedValue) {
        
        switch (selectedValue) {
            case '1':
                location.href = "/paginas/atestado/atestado.html"
                break;
            case '2':
                location.href = "/paginas/declaracao/declaracao.html"
                break;
            case '3':
                location.href = "/paginas/receituario/receituario.html"
                break;
            case '4':
                location.href = "/paginas/recibo/recibo.html"
                break;
            case '5':
                location.href = "/paginas/timbrado/timbrado.html"
                break;
            default:
                break;
        }
    } else {
        Swal.fire({
            icon: "warning",
            text: "Selecione uma opção válida",
        });
    }
}
