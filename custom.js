
function resultado(){
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var nota4 = parseInt(document.getElementById("nota4").value);
    var resultado = (nota1 + nota2 + nota3 + nota4) / 4;
    if(resultado>=6){
        alert("Parabéns você foi Aprovado com a nota:" + resultado)    
    }else{
        alert("Infelizmente você foi Reprovado com a nota:" + resultado) 
    }
    
}
