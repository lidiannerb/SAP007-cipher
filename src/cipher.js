const cipher = {

  encode: function (offset, text){

    let textCoded = "";
    
    for (let i=0; i < text.length; i++){

      let encrypt = text.charCodeAt(i);

      if (encrypt >= 65 && encrypt <= 90){

        /*textCoded += String.fromCharCode (((encrypt - 65 + offset %26) + 26) %26 + 65);*/

        textCoded += String.fromCharCode (((encrypt - 65 + offset) % 26) + 65);
      } 
    
    }   
    return textCoded;
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



