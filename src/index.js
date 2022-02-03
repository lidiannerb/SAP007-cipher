import cipher from './cipher.js';


const btnEncrypt = document.getElementById('btnsend1'); 

function encryptingText (e){  

    e.preventDefault()  /* previne o comportamento padrão do "click", de enviar dados  a páginrecarregandoa*/
    let offset = Number(document.getElementById("offset").value);
    let string = document.getElementById("textencrypt").value;    
    const encrypting = cipher.encode(offset, string);    
    document.getElementById("answer1").innerHTML = encrypting;
}
btnEncrypt.addEventListener('click', encryptingText)


const btnDecrypt = document.getElementById('btnsend2'); 

function decryptingText (e){  

    e.preventDefault() 
    let offset = Number(document.getElementById("offset").value);
    let string = document.getElementById("textdecrypt").value;    
    const decrypting = cipher.decode(offset, string);    
    document.getElementById("answer2").innerHTML = decrypting;
}
btnDecrypt.addEventListener('click', decryptingText)

const btnInstruct = document.getElementById("btnModal");

function instruct () {

    let modal = document.querySelector('.modal')
    modal.style.display = 'block'; // mudando o display de forma dinâmica (js)
}
btnInstruct.addEventListener('click', instruct)


