import cipher from './cipher.js';


const btnEncrypt = document.getElementById('btnsend1'); 

function encryptingText (e){  

    e.preventDefault()  
    const offset = Number(document.getElementById("offset").value);
    const string = document.getElementById("textencrypt").value;    
    const encrypting = cipher.encode(offset, string);    
    document.getElementById("answer1").innerHTML = encrypting;
}
btnEncrypt.addEventListener('click', encryptingText)


const btnDecrypt = document.getElementById('btnsend2'); 

function decryptingText (e){  

    e.preventDefault() 
    const offset = Number(document.getElementById("offset").value);
    const string = document.getElementById("textdecrypt").value;    
    const decrypting = cipher.decode(offset, string);    
    document.getElementById("answer2").innerHTML = decrypting;
}
btnDecrypt.addEventListener('click', decryptingText)





const btnInstruct = document.getElementById("btnModal");

function instruct () {

    let modal = document.querySelector('.modal')
    modal.style.display = 'block';  
}
btnInstruct.addEventListener('click', instruct)


const modalOff = document.getElementById("btnFecharModal");

function instructOff () {

    let modal = document.querySelector('.modal')
    modal.style.display = 'none'; 
}
modalOff.addEventListener('click', instructOff)
