import cipher from './cipher.js';


let enviarCifragem = document.getElementById("cifragem");
let enviarDecifragem = document.getElementById("decifragem");

function cifrar() {
    let palavra = document.getElementById("palavra-cifrada").value;
    let offset = document.getElementById("offset-cifragem").value;
    document.getElementById("mostrar-cifragem").innerHTML = cipher.encode(offset, palavra);

}

function decifrar() {
    let palavra = document.getElementById("palavra-decifrada").value;
    let offset = document.getElementById("offset-decifragem").value;
    document.getElementById("mostrar-decifragem").innerHTML = cipher.decode(offset, palavra);

}

enviarCifragem.addEventListener("click", cifrar);
enviarDecifragem.addEventListener("click", decifrar);



