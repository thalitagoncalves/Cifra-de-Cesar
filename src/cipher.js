const cipher = {
  encode: function cifrar(offset, palavra) {
    let deslocamento = Number(offset);
    let arr = []; 
    for(var x = 0; x < palavra.length; x++) {
      let transf = palavra.toUpperCase().charCodeAt(x);
      let novaLetra = String.fromCharCode(((transf - 65 + deslocamento) % 26) + 65);
      if(palavra[x] !== palavra[x].toUpperCase()){
        novaLetra = novaLetra.toLowerCase();
      }
      arr.push(novaLetra);
    }
     return arr.join("");
  },

  decode: function decifrar(offset, palavra ){
    let deslocamento = Number(offset);
    let arr = [];
    for(var x = 0; x < palavra.length; x++) {
      let transf = palavra.toUpperCase().charCodeAt(x);
      let novaLetra = String.fromCharCode(((transf + 65 - deslocamento) % 26) + 65  );
      if(palavra[x] !== palavra[x].toUpperCase()){
        novaLetra = novaLetra.toLowerCase();
      }
      arr.push(novaLetra);
    }
     return arr.join("");
  }

}



export default cipher
