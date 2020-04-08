import cipher from './cipher.js';


let enviarCifragem = document.getElementById("cifragem");
function cifrar() {
    let palavra = document.getElementById("palavra-cifrada").value;
    let offset = document.getElementById("offset1").value;
    document.getElementById("mostrar-mensagem").innerHTML = cipher.encode(offset, palavra);

}

enviarCifragem.addEventListener("click", cifrar);

let enviarDecifragem = document.getElementById("decifragem");
function decifrar() {
    let palavra = document.getElementById("palavra-decifrada").value;
    let offset = document.getElementById("offset2").value;
    document.getElementById("mostrar-mensagem2").innerHTML = cipher.decode(offset, palavra);

}

enviarDecifragem.addEventListener("click", decifrar);



