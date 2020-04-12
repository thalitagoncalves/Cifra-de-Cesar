const cipher = {
  encode: function cifrar(offset, palavra) {
    let deslocamento = Number(offset);
    let arr = []; 
    if ((offset !== 0 && offset !== null) && (palavra !== "" && palavra !== 0)) {
      for(var x = 0; x < palavra.length; x++) {
        let transf = palavra.toUpperCase().charCodeAt(x); // me devolve o código da minha letra original 
        let novaLetra = String.fromCharCode(((transf - 65 + deslocamento) % 26) + 65); // o código da minha nova letra
        if(palavra[x] !== palavra[x].toUpperCase()){
          novaLetra = novaLetra.toLowerCase();
        }
        arr.push(novaLetra);
      }
      return arr.join("");
    } else {
      throw new TypeError;
    }
  },

  decode: function decifrar(offset, palavra ){
    let deslocamento = Number(offset);
    let arr = [];
    if ((offset !== 0 && offset !== null) && (palavra !== "" && palavra !== 0)) {
      for(var x = 0; x < palavra.length; x++) {
        let transf = palavra.toUpperCase().charCodeAt(x);
        let novaLetra = String.fromCharCode(((transf - 90 - deslocamento) % 26) + 90  );
        if(palavra[x] !== palavra[x].toUpperCase()){
         novaLetra = novaLetra.toLowerCase();
      }
      arr.push(novaLetra);
    }
     return arr.join("");
    } else {
      throw new TypeError;
    }
      
  }

}



export default cipher
