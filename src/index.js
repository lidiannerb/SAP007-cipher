import cipher from './cipher.js';


const btnEncrypt = document.getElementById('btnsend1'); 

function encryptingText (e){  

    e.preventDefault()  /* interrompe o recarregamento automatico da página*/
    let offset = Number(document.getElementById("offset").value);
    let string = document.getElementById("textencrypt").value;    
    const encrypting = cipher.encode(offset, string);    
    document.getElementById("answer1").innerHTML = encrypting;
}

btnEncrypt.addEventListener('click', encryptingText)


const btnDecrypt = document.getElementById('btnsend2'); 

function decryptingText (e){  

    e.preventDefault()  /* interrompe o recarregamento automatico da página*/
    let offset = Number(document.getElementById("offset").value);
    let string = document.getElementById("textdecrypt").value;    
    const decrypting = cipher.decode(offset, string);    
    document.getElementById("answer2").innerHTML = decrypting;
}

btnDecrypt.addEventListener('click', decryptingText)

                     


