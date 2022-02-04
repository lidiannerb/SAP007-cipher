import cipher from './cipher.js';


const btnEncrypt = document.getElementById('btnsend1'); 

function encryptingText (e){  

    e.preventDefault()  /* previne o comportamento padrão do "click", de enviar dados  a páginrecarregandoa*/
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


/*Abaixo estão as funções para abrir e fechar o display com as instruções de uso*/ 


const btnInstruct = document.getElementById("btnModal");

function instruct () {

    let modal = document.querySelector('.modal')
    modal.style.display = 'block'; // mudando o display de forma dinâmica (js)
}
btnInstruct.addEventListener('click', instruct)

const modalOff = document.getElementById("btnFecharModal");

function instructOff () {

    let modal = document.querySelector('.modal')
    modal.style.display = 'none'; // mudando o display de forma dinâmica (js)
}
modalOff.addEventListener('click', instructOff)
