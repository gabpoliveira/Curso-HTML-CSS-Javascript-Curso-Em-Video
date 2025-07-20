function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=5 && hora < 12){
        //bom dia
        img.src = 'imagens/dia.png'
        document.body.style.background = '#73657d'
    } else if (hora >= 12 && hora < 19){
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#a99385'
    } else if (hora >= 19 && hora <22){
        //boa noite 1
        img.src = 'imagens/noite.png'
        document.body.style.background ='#523c31'
    } else{
        //boa noite 2
        img.src = 'imagens/madrugada.png'
        document.body.style.background ='#5a5b5f'
    }
}