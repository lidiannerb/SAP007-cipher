const cipher = {  /* constante que se torna um objeto (pois contem um bloco entre chaves) o qual será utilizado no index.js  */

encode: function (offset, text){

  let textCoded = "";
    
  for (let i=0; i < text.length; i++){
     let encrypt = text.charCodeAt(i);
    if (encrypt >= 65 && encrypt <= 90){
      textCoded += String.fromCharCode(((encrypt - 65 + offset) % 26) + 65);
    }else if (encrypt == 32) {
      textCoded += text.charAt(i);
    }
    }   
    return textCoded;
  },

decode: function (offset, text){

  let textDecoded = "";
      
  for (let i=0; i < text.length; i++){
    let decrypt = text.charCodeAt(i);
     if (decrypt >= 65 && decrypt <= 90){
       textDecoded += String.fromCharCode(((decrypt - 65 - offset) % 26) + 65);
     }else if(decrypt == 32) {
       textDecoded += text.charAt(i);
     }
  }   
    return textDecoded;
  }
}

export default cipher;
