const cipher = {  /* constante que se torna um objeto (pois contem um bloco entre chaves) o qual será utilizado no index.js  */

encode: function (offset, text){

    let textCoded = "";
    
    for (let i=0; i < text.length; i++){
      let encrypt = text.charCodeAt(i);
      if (encrypt >= 65 && encrypt <= 90){
        textCoded += String.fromCharCode(((encrypt - 65 + offset) % 26) + 65);
      } else if (text.charCodeAt(i) == 32){
        textCoded += text.charAt(i);
      }
    }   
    return textCoded;
  },

decode: function (offset, text){

    let textDecoded = "";
    
    for (let i=0; i < text.length; i++){
      let encrypt = text.charCodeAt(i);
      if (encrypt >= 65 && encrypt <= 90){
        textDecoded += String.fromCharCode(((encrypt - 65 - offset) % 26) + 65);
      } else if (text.charCodeAt(i) == 32){
        textDecoded += text.charAt(i);
      }
    }   
    return textDecoded;
  }
}



export default cipher;






/*(palavra, desloc)=> {
const tamPalavra = palavra.length;
 
  for (let i = 0; i < tamPalavra; i++){
    const codAsc = palavra.charCodeAt(i);
    const cifrando = ((codAsc - 65 + desloc) % 26) + 65;

  }
  
}*/



