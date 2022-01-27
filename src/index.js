import cipher from './cipher.js';


const btnEncrypt = document.getElementById('btnsend'); 

function encryptingText (e){

    e.preventDefault()

    let offset = Number(document.getElementById("offset").value);

    let string = document.getElementById("textencrypt").value;
    
    const encrypting = cipher.encode(offset, string);
    
    document.getElementById("answer").innerHTML = encrypting;

}

btnEncrypt.addEventListener('click', encryptingText)


                     


