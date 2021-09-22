const click = document.querySelectorAll('.click');
const rovan = document.querySelectorAll('.click.key');
const inner = document.querySelectorAll('.inner_color');
const top_click = document.querySelector('.top_click');
const box_music = document.querySelector('.box_music');
const truee = document.querySelector('.true');
const falsee = document.querySelector('.false');
const end_truee = document.querySelector('.end-true');
const end_falsee = document.querySelector('.end-false');
console.log(truee);
const arrys = ['z', 'a', 'q', 'x', 's', 'w', 'c', 'd', 'e', 'v', 'f', 'r']

click.forEach(key => {
    key.addEventListener('click', () => {
        playMusic(key)

    })
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const drumsKeyIndex = arrys.indexOf(key)

    if (drumsKeyIndex > -1) playMusic(rovan[drumsKeyIndex])
})
// let rand = Math.floor((Math.random() * 100))
// console.log(rand);
let playMusic = (key) => {
    const drumSound = document.getElementById(key.dataset.music)
    drumSound.currentTime = 0
    drumSound.play()
    key.classList.add('active')
    truee.style.transform = 'rotate(200deg)'
    truee.style.transition = '.5s'
    end_truee.style.transform = 'rotate(100deg)'
    end_truee.style.transition = '2s'
    falsee.style.transform = 'rotate(250deg)'
    falsee.style.transition = '1s'
    end_falsee.style.transform = 'rotate(360deg)'
    end_falsee.style.transition = '2s'
    drumSound.addEventListener('ended', () => {
        truee.style.transform = 'rotate(0)'
        truee.style.transition = '.5s'
        end_truee.style.transform = 'rotate(0)'
        end_truee.style.transition = '.5s'
        falsee.style.transform = 'rotate(0)'
        falsee.style.transition = '.5s'
        end_falsee.style.transform = 'rotate(0)'
        end_falsee.style.transition = '.5s'
        key.classList.remove('active')
    })
}

top_click.addEventListener('click', () => {
    setTimeout(() => {
        box_music.classList.toggle('show')
        let contains = box_music.classList.contains('show')
        if (contains == true) {
            setTimeout(() => {
                box_music.classList.add('zindex')
            }, 200)
        }
    }, 99)
    top_click.addEventListener('click', () => {
        box_music.classList.remove('zindex')
        // box_music.classList.remove('show')
    })
});