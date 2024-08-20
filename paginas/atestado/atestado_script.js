// Campo Visualizar a Senha
const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password");

    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            pwFields.forEach(pwField => {
                if (pwField.type === "password") {
                    pwField.type = "text";   
                    
                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                } else {
                    pwField.type = "password";
                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
    }) 

    const enviar = document.querySelector("#entrar");

    enviar.addEventListener("click", function(e) {
        e.preventDefault();
        const usuario = document.getElementById("usuario").value,
        senha = document.getElementById("senha").value;
        
        if (usuario === "andremiranda14" && senha === "31102008aa") {
            console.log("deu certo")
        } else {
            console.log("campo invalido")
        }
    });
