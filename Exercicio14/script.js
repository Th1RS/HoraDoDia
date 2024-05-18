
function carregar(){
    let msg = window.document.getElementById('mensagem'); //criando o elemento que irá dizer o horario 
    let img = window.document.getElementById('imagem');
    var data = new Date()
    // var hora = data.getHours()
    let hora = prompt('digite um horario')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#C7B68A'

    }else if(hora >=12 && hora <= 18){
        //Boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = '#cc7d38'
    } else{
        // Boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#1c2f35'
    }
}