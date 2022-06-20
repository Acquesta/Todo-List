const senha = document.getElementById("senha")
const senha2 = document.getElementsById("senha2")

function comparar(){
    if(senha.value != senha2.value){
        senha2.setCostumValidity('As senhas não conferem')
    }else{
        senha2.setCostumValidity('')
    }
}

senha.onchange = comparar
senha2.onkeyup = comparar