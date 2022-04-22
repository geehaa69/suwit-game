const
    playerAllChoice = document.getElementById('option_user'),
    playerChoiceBatu = document.querySelector('#option_user .batu'),
    playerChoiceKertas = document.querySelector('#option_user .kertas'),
    playerChoiceGunting = document.querySelector('#option_user .gunting'),
    compAllChoice = document.getElementById('option_comp'),
    compChoiceBatu = document.querySelector('#option_comp .batu'),
    compChoiceGunting = document.querySelector('#option_comp .gunting'),
    compChoiceKertas = document.querySelector('#option_comp .kertas'),
    announcement = document.querySelector('.announcement p'),    
    announcementBox = document.querySelector('.announcement'),    
    drawScore = document.getElementById('draw'),
    playScore = document.getElementById('play'),
    loseScore = document.getElementById('lose'),
    winScore = document.getElementById('win')
let compChoice = ''
let choice = 0
let draw = 0
let win = 0
let lose = 0
let play = 0


function winnerAndLoser(status) {
    if (status == 'win') {
        setTimeout(function() {
            announcement.innerHTML = "Kamu MENANG! | Klik disini untuk main lagi"
            win += 1
            winScore.innerHTML = win
            play += 1
            playScore.innerHTML = play + " kali"
            announcementBox.style.backgroundColor = 'lightgreen'
            announcement.classList.add('announcement_animation')
        }, 2000)
    } else if (status == 'lose') {
        setTimeout(function() {
            announcement.innerHTML = "Kamu KALAH! | Klik disini untuk main lagi"
            lose += 1
            loseScore.innerHTML = lose
            play += 1
            playScore.innerHTML = play + " kali"
            announcementBox.style.backgroundColor = 'lightcoral'
            announcement.classList.add('announcement_animation')
        }, 2000)
    }
}


function match(playerChoice) {
    // bot computer random choice
    // compChoice = Math.floor(Math.random() * 10)
    choice = Math.floor(Math.random() * 150) + 1
    if (choice <= 150 && choice > 100) {
        choice = 2
        compChoice = 'kertas'
    } else if (choice <= 100 && choice > 50) {
        choice = 1
        compChoice = 'gunting'
    } else {
        choice = 0
        compChoice = 'batu'
    }
    
    // animation
    playerAllChoice.querySelector('.'+ playerChoice).classList.add('transisi_user')
    compAllChoice.querySelectorAll('#option_comp .kertas_gunting_batu')[choice].classList.add('transisi_comp')

    // nonaktifkan semua option
    playerAllChoice.style.pointerEvents = 'none'

    // tentukan apakah kalah atau menang
    if (compChoice == playerChoice) {
        setTimeout(function() {
            announcement.innerHTML = "Hasilnya SERI! | Klik disini untuk main lagi"
            draw += 1
            drawScore.innerHTML = draw
            play += 1
            playScore.innerHTML = play + " kali"
            announcementBox.style.backgroundColor = 'lightblue'
            announcement.classList.add('announcement_animation')
        }, 2000)
    } else if (playerChoice == 'kertas' && compChoice == 'gunting') {
        winnerAndLoser('lose')
    } else if (playerChoice == 'kertas' && compChoice == 'batu') {
        winnerAndLoser('win')
    } else if (playerChoice == 'gunting' && compChoice == 'kertas') {
        winnerAndLoser('win')
    } else if (playerChoice == 'gunting' && compChoice == 'batu') {
        winnerAndLoser('lose')
    } else if (playerChoice == 'batu' && compChoice == 'kertas') {
        winnerAndLoser('lose')
    } else if (playerChoice == 'batu' && compChoice == 'gunting') {
        winnerAndLoser('win')
    } else {
        winnerAndLoser('error')
    }
}


announcement.addEventListener('click', function() {
    // kembalikan ke keadaan semula
    playerChoiceBatu.classList.remove('transisi_user')
    playerChoiceGunting.classList.remove('transisi_user')
    playerChoiceKertas.classList.remove('transisi_user')
    compChoiceKertas.classList.remove('transisi_comp')
    compChoiceBatu.classList.remove('transisi_comp')
    compChoiceGunting.classList.remove('transisi_comp')
    
    // aktifkan lagi semua optionnya
    playerAllChoice.style.pointerEvents = 'auto'

    // nonaktifkan hover di announcement
    announcement.classList.remove('announcement_animation')
    announcementBox.style.backgroundColor = '#DFDFDE'

    // kamalikan tulisannya jadi default
    announcement.innerHTML = "Game Match"
})


function reset() {
    draw = 0
    win = 0
    lose = 0
    play = 0
    winScore.innerHTML = win
    loseScore.innerHTML = lose
    drawScore.innerHTML = draw
    playScore.innerHTML = 'Belum bermain'
}


const menu = document.getElementById('menu')
const image = document.querySelector('#menu img')
const sidebar = document.querySelector('.sidebar')
let cekMenu = 'close'
menu.addEventListener('click', function() {
    if (cekMenu == 'close') {
        image.removeAttribute('src')
        sidebar.style.top = "0px"
        sidebar.style.right = "0px"
        sidebar.style.transition = "right .3s"
        setTimeout(function() {
            image.setAttribute('src', '../static/img/close.png')
            image.style.transform = "scale(.6)"
            image.style.right = "6px"
        }, 0350)
        cekMenu = 'open'
    } else {
        image.removeAttribute('src')
        sidebar.style.right = "-10000px"
        sidebar.style.transition = "right .5s"
        setTimeout(function() {
            image.setAttribute('src', '../static/img/menu.png')
            image.style.transform = "scale(.43)"
            image.style.right = "3px"
        }, 0350)
        cekMenu = 'close'
    }
})