function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 4){
                //bb
               img.setAttribute('src', 'imagens/bb-menino.jpg')
            }else if (idade >= 4 && idade < 15){
                //criança
                img.setAttribute('src', 'imagens/menino.jpg')
            }else if (idade >= 15 && idade < 21){
                //adolescente
                img.setAttribute('src', 'imagens/adol-menino.jpg')
            }else if (idade >= 21 && idade < 60){
                //adulto
                img.setAttribute('src', 'imagens/idoso.jpg')
            }else{
                //idoso
            }


        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 4){
                //bb
                img.setAttribute('src', 'imagens/bb-menino.jpg')
            }else if (idade >= 4 && idade < 15){
                //criança
                img.setAttribute('src', 'imagens/menina.jpg')
            }else if (idade >= 15 && idade < 21){
                //adolescente
                img.setAttribute('src', 'imagens/adol-menina.jpg')
            }else if (idade >= 21 && idade < 60){
                //adulto
                img.setAttribute('src', 'imagens/mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }

        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}