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

function alert() {
        const usuario = document.getElementById("usuario").value,
        senha = document.getElementById("senha").value;
    
        if (usuario === "andremiranda14" && senha === "31102008aa") {
            location.href = "/paginas/principal/principal.html";
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuário ou Senha Inválidos",
            });
        }
    };


