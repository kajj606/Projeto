const cadastrar = document.getElementById('cadastre-se');
const fomr = document.getElementById('my-form')
const enviar = document.getElementById('enviar')
const texto_agradecimento = document.getElementById('texto_agradecimento')
const trabalhe_conosco = document.getElementById('trabalhe_conosco')
cadastrar.addEventListener('click', function(){
    if(fomr.style.display == 'none' || fomr.style.display == ''){
        fomr.style.display = "block";
        cadastrar.style.display = "none"
    } else {
        fomr.style.display = "none";
    }
});
enviar.addEventListener('click', function(){
    if(texto_agradecimento.style.display == 'none'){
        texto_agradecimento.style.display = 'block'
        fomr.style.display = 'none'
        trabalhe_conosco.style.display = 'none'
    }
});

document.body.style.boxShadow = "inset 0 0 50px rgba(0,0,0,0.05)";