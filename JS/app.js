const formulario
 
= document.getElementById("formContato");
 
formulario.addEventListener("submit", function (event) {
        // Impede o recarregamento da página
        event.preventDefault();
 
        const nome = document.getElementById("nome").value;
           
        document.getElementById("resultado").innerHTML =
            "Olá,  " + nome + "! Formulário enviado com sucesso.";
        formulario.reset();
 
});