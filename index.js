// Funções do site:

function mudarDisplay(id, id2){
    let area = window.document.getElementById(id); 
    let area2 = window.document.getElementById(id2); 
    area.style.display = "block"
    area2.style.display = "none"
}

function criptografar( string, senha){
    senha = parseInt(senha)
    string = string.toLowerCase()
    let ordemPadrao = ['a', 'ç', 'e', 'h', 'i', 'j', 'l', 'o', 'm', 'r', 'q', 'n', 'g', 'w', 'k', 'z', 'c', 'y', 's', 'p', 'x', 'f', 'b', 'd', 't', 'v', 'u', ',']
    let saida = ""
    let encontradoNaOrdemPadrao = false
    for (let i = 0; i < string.length; i++) {
    
        for(let cont2 = 0; cont2 < ordemPadrao.length; cont2++){
            if(string.charAt(i) == ordemPadrao[cont2]){
               saida = saida + ordemPadrao[(cont2 + senha) % ordemPadrao.length]
               encontradoNaOrdemPadrao = true; 
            }
        }

        if(encontradoNaOrdemPadrao == false){
            saida += string.charAt(i)
        }

        encontradoNaOrdemPadrao = false
        
    }

    return saida; 

}


function descriptografar( string, senha){
    senha = parseInt(senha)
    string = string.toLowerCase()
    let ordemPadrao = ['a', 'ç', 'e', 'h', 'i', 'j', 'l', 'o', 'm', 'r', 'q', 'n', 'g', 'w', 'k', 'z', 'c', 'y', 's', 'p', 'x', 'f', 'b', 'd', 't', 'v', 'u', ',']
    let saida = ""
    let encontradoNaOrdemPadrao = false
    for (let i = 0; i < string.length; i++) {
    
        for(let cont2 = 0; cont2 < ordemPadrao.length; cont2++){
            if(string.charAt(i) == ordemPadrao[cont2]){
               let novoIndice = (cont2 - senha) % ordemPadrao.length
               while(novoIndice < 0){
                    novoIndice = ordemPadrao.length - (novoIndice * -1)
               }
               console.log(novoIndice)
               saida = saida + ordemPadrao[novoIndice]
               encontradoNaOrdemPadrao = true; 
            }
        }

        if(encontradoNaOrdemPadrao == false){
            saida += string.charAt(i)
        }

        encontradoNaOrdemPadrao = false
        
    }

    return saida; 

}

    



function exibirResultado(telaAtual, resultado){

    if(telaAtual == "codificar"){
        window.document.getElementById("funcao").innerText = "CRIPTOGRAFADO"
    }
    else {
        window.document.getElementById("funcao").innerText = "DESCRIPTOGRAFADO"
    }

    window.document.getElementById("output").value = resultado

}




// Eventos

let bntCriptografia = window.document.getElementById("criptografarbnt")
let bntDescriptografia = window.document.getElementById("descriptografarbnt")
let bntProcessarDescriptografia = window.document.getElementById("processarDescriptografia")
let bntProcessarCriptografia = window.document.getElementById("processarCriptografia")

bntCriptografia.addEventListener("click", function(){
    mudarDisplay("codificar", "recepcao")
})

bntDescriptografia.addEventListener("click", function(){
    mudarDisplay("descodificar", "recepcao")
})

bntProcessarCriptografia.addEventListener("click",

    function(){
        let texto = window.document.getElementById("textoAcriptografar").value
        let senha = parseInt(window.document.getElementById("senha").value)
        if(senha){
        mudarDisplay("saida","codificar")
        let criptografado = criptografar(texto, senha)
        exibirResultado("codificar", criptografado)
        }
        else {
            alert("Insira uma senha")
        }
    }

)

bntProcessarDescriptografia.addEventListener("click",

    function(){
        let texto = window.document.getElementById("textoAdescriptografar").value
        let senha = parseInt(window.document.getElementById("senhaDescriptografia").value)
        if(senha){
        mudarDisplay("saida","descodificar")
        let criptografado = descriptografar(texto, senha)
        exibirResultado("descodificar", criptografado)
        }
        else {
            alert("Insira uma senha")
        }
    }

)

