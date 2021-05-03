var altura = 0 
var largura = 0
var vidas = 1
var tempo = 15
var criarCoronaTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')
if (nivel === 'normal') {
    criarCoronaTempo = 1500
}else if (nivel === 'facil'){
    criarCoronaTempo = 2000
    tempo = 10
}else if (nivel === 'dificil'){
    criarCoronaTempo = 1000
    tempo = 30
}else if (nivel === 'chucknorris'){
    criarCoronaTempo = 750
    tempo = 60
}
function ajustaTamanhoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanhoJogo()
var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarCorona)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)
function posicaoRandomica() {
    
    if (document.getElementById('corona')) {
        document.getElementById('corona').remove()
        if (vidas > 3) {
            window.location.href = 'gameOver.html'
        }else{
            document.getElementById('v' + vidas).src = "img/coracao_vazio.png" //aqui vai a vida
            vidas++
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Criar HTML
    var corona = document.createElement('img')
    corona.src = 'img/Corona.png'
    corona.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    corona.style.left = posicaoX + 'px'
    corona.style.top = posicaoY + 'px'
    corona.style.position = 'absolute'
    corona.id = 'corona'
    corona.onclick = function() {
        this.remove()
    }
    document.body.appendChild(corona)
}
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'corona1'
        case 1:
            return 'corona2'
        case 2:
            return 'corona3'
    }
}
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}