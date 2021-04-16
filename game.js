let altura = 0 
let largura = 0
let vidas = 1
let tempo = 15
let criarCoronaTempo = 1500
let nivel = window.location.search
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
let cronometro = setInterval(function () {
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
            window.location.href = 'fimDeJogo.html'
        }else{
            document.getElementById('v' + vidas).src = "" //aqui vai a vida
            vidas++
        }
    }
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Criar HTML
    let corona = document.createElement('img')
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
    let classe = Math.floor(Math.random() * 3)
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
    let classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}