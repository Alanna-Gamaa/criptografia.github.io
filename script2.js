
const submit = document.getElementById("submit");
const resultado = document.getElementById("resultado");

submit.addEventListener("click", DeslocarTresPosis);


  // Deslocar as letras em 3 posições
  function DeslocarTresPosis(){
    const entrada = document.getElementById("entrada");
    const mensagem = entrada.value;

    let deslocado = "";
    for (let i = 0; i < mensagem.length; i++) {
      const letra = mensagem[i];
      if (letra.match(/[a-z]/i)) {
        deslocado += String.fromCharCode(letra.charCodeAt(0) + 3);
      } else {
        deslocado += letra;
      }
    }
    inverteTexto(deslocado);
  }
  

  // Inverter o texto
  function inverteTexto (mensagem) {
    const invertido = mensagem.split("").reverse().join("");
    DeslocaMetade (invertido);
    
  }
  

  // Deslocar os caracteres da metade em diante em uma posição para a esquerda

  function DeslocaMetade (msgInertida) {
      let resultadoFinal = "";
      const metade = Math.ceil(msgInertida.length / 2);
      for (let i = 0; i < msgInertida.length; i++) {
        const letra = msgInertida[i];
        if (i >= metade) {
          resultadoFinal += String.fromCharCode(letra.charCodeAt(0) - 1);
        } else {
          resultadoFinal += letra;
        }
      }
     resultado.value = resultadoFinal;
  }



