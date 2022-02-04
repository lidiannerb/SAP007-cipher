const cipher = {  

encode: function (offset, text){

    if (typeof offset != 'number' || (offset !=0 && offset%1 !=0)){
      throw new TypeError();
    }
    if(typeof text != 'string'){
      throw new TypeError();
    }

  let textCoded = "";
    
  for (let i=0; i < text.length; i++){  
     let encrypt = text.charCodeAt(i);
      
      if (encrypt >= 65 && encrypt <=90){
        encrypt = ((encrypt - 65 + offset) % 26) + 65;
      
      } if (encrypt >= 97 && encrypt <= 122){
        encrypt = (((encrypt - 97 + offset) % 26) + 97);

      }if (encrypt == 32) {
        encrypt = (encrypt + text.charAt(i));
      } 
      textCoded += String.fromCharCode(encrypt);
    }
    return textCoded;
},

decode: function (offset, text){

  if (typeof offset != 'number' || (offset !=0 && offset%1 !=0)){
    throw new TypeError();
  }
  if(typeof text != 'string'){
    throw new TypeError();
  }

  let textDecoded = "";
      
  for (let i=0; i < text.length; i++){

    let decrypt = text.charCodeAt(i);
     
      if (decrypt >= 65 && decrypt <= 90){
        decrypt = ((decrypt - 90 - offset) % 26) + 90;

      }if (decrypt >= 97 && decrypt <= 122){
        decrypt = ((decrypt - 122 - offset) % 26) + 122;

      }if (decrypt == 32) {
        decrypt = (decrypt + text.charAt(i));
      }

      textDecoded += String.fromCharCode(decrypt);
  }   
    return textDecoded;
  }
};
export default cipher;
