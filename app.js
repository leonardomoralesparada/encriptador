const abecedario = "abcdefghijklmnñopqrstuvwxyz";
const parte1 = abecedario.slice(0, 13);
const parte2 = abecedario.slice(14).split('').reverse().join('');

function cifrar(letra) {
  if (letra === 'n') {
    return 'n';
  }

  let index = parte1.indexOf(letra);
  if (index !== -1) {
    return parte2[index];
  }

  index = parte2.indexOf(letra);
  if (index !== -1) {
    return parte1[index];
  }

  return letra; // Si la letra no está en el abecedario, se devuelve tal cual
}

function descifrar(letra) {
  return cifrar(letra); // En este caso, el cifrado y descifrado son iguales
}

function obtenerText() {
    let inputText = document.getElementById('inputText').value;
    let textoCifrado = "";
    for (let i = 0; i < inputText.length; i++) {
        textoCifrado += cifrar(inputText[i]);
    }
    document.getElementById('outputText').value = textoCifrado;
}

function obtener() {
    let outputText = document.getElementById('outputText').value;
    let textoDescifrado = "";
    for (let i = 0; i < outputText.length; i++) {
        textoDescifrado += descifrar(outputText[i]);
    }
    document.getElementById('inputText').value = textoDescifrado;
}

function copiarTexto() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}

function limpiarTexto() {
    document.getElementById('inputText').value = "";
    document.getElementById('outputText').value = "";
}