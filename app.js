/* 
La letra 'e' es convertida en 'enter'
La letra 'i' es convertida en 'imes'
La letra 'a' es convertida en 'ai'
La letra 'o' es convertida en 'ober'
La letra 'u' es convertida en 'ufat'

*/

const textArea = document.querySelector('#prompt');
const mensaje = document.querySelector('.mensaje');

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnCopiar() {
    const textoCopiar = mensaje.value;
    textArea.value = textoCopiar;

}

function encriptar(stringEncriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];

    let matrizInvalido = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "á", "é", "í", "ó", "ú", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    for (let j = 0; j < matrizInvalido.length; j++) {
        if (stringEncriptado.includes(matrizInvalido[j])) {
            /*stringEncriptado = "Por favor ingresa unicamente minusculas y sin acentos";*/
            alert("Por favor ingresa unicamente minusculas y sin acentos");
            stringEncriptado = "";
            break;
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const mensajeDesencriptado = desencriptar(textArea.value)
    mensaje.value = mensajeDesencriptado;
    mensaje.style.backgroundImage = "none";


}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],

    ];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptar;
}