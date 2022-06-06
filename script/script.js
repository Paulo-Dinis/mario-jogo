
const mario = document.querySelector ('.mario')
const pipe = document.querySelector ('.pipe')
const nuvens = document.querySelector('.nuvens')
const endGame = document.querySelector('.endGame')    
const musica = document.querySelector('.music')
const button = document.querySelector('button')
const startGame = document.querySelector ('#mov')
const trilhaSom = document.querySelector ('.som')

const playMusic = button.addEventListener('click', () => {
    const audio = document.querySelector('audio')
    audio.play();
    startGame.removeAttribute('id')
    button.style.display = 'none'
})

const jump = () => {
    mario.classList.add('jump')

    const pulo = document.querySelector('.puloSom')
    pulo.play(),

    setTimeout(() =>{

        mario.classList.remove('jump')

    }, 500)
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
    const nuvenPosition = +window.getComputedStyle(nuvens).left.replace("px", "")
    

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px` 

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px` 

        mario.src = "imagens/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        nuvens.style.animation = 'none'
        nuvens.style.left = `${nuvenPosition}px`

        endGame.style.display = 'block'
        trilhaSom
        
        document.querySelector('.som').muted = true
        document.querySelector('.puloSom').muted = true

        const colidiu = document.querySelector('.colidiuSom')
        colidiu.play(),

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump)



