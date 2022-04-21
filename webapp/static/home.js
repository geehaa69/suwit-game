// about page
const
    icon = document.getElementById('icon_about'),
    divIcon = document.querySelector('.about_icon')


icon.addEventListener('click', function showAbout() {
    // create container content
    const shadow = document.createElement('div')
    document.querySelector('.container').insertBefore(shadow, divIcon)
    shadow.classList.add('shadow_box')
    const aboutPage = document.createElement('div')
    document.querySelector('.container').appendChild(aboutPage)
    aboutPage.classList.add('container_about')
    const box = document.createElement('div')
    document.querySelector('.container_about').appendChild(box)
    box.classList.add('about_box')
    box.setAttribute('id', 'box')

    icon.style.display = 'none'
    
    // create elemen for profile image
    const profileImg = document.createElement('img')
    document.getElementById('box').appendChild(profileImg)
    profileImg.setAttribute('src', '../static/img/profile.png')
    profileImg.classList.add('profile_about')
    // create elemen for paragraf under image
    const paragraf = document.createElement('p')
    document.getElementById('box').appendChild(paragraf)
    paragraf.innerHTML = "Game Suwit merupakan web app buatan GeeHaaStudio. Game ini dibuat dengan sangat sederhana sehingga user dapat dengan mudah memainkannya, disini user akan bermain dengan computer bot yang telah saya buat. Kedepannya GHS akan berfokus pada bidang web app, tunggu karya - karya GHS selanjutnya."
    paragraf.classList.add('paragraf')
    // create element for instagram account
    const instagramAccount = document.createElement('div')
    document.getElementById('box').appendChild(instagramAccount)
    instagramAccount.classList.add('instagram_account')
    const instagramImage = document.createElement('img')
    document.querySelector('.instagram_account').appendChild(instagramImage)
    instagramImage.setAttribute('src', '../static/img/Instagram.png')
    const instagramLink = document.createElement('a')
    document.querySelector('.instagram_account').appendChild(instagramLink)
    instagramLink.setAttribute('target', '_blank')
    instagramLink.setAttribute('href', 'https://www.instagram.com/_geehaa_/')
    instagramLink.innerHTML = "_geehaa_"
    // create element for github account
    const githubAccount = document.createElement('div')
    document.getElementById('box').appendChild(githubAccount)
    githubAccount.classList.add('github_account')
    const githubImage = document.createElement('img')
    document.querySelector('.github_account').appendChild(githubImage)
    githubImage.setAttribute('src', '../static/img/GitHub.png')
    const githubLink = document.createElement('a')
    document.querySelector('.github_account').appendChild(githubLink)
    githubLink.setAttribute('target', '_blank')
    githubLink.setAttribute('href', 'https://github.com/geehaa69')
    githubLink.innerHTML = "geehaa69"
    // create close button
    const close = document.createElement('img')
    document.getElementById('box').appendChild(close)
    close.setAttribute('src', '../static/img/close.png')
    close.classList.add('close_button')
    close.addEventListener('click', function() {
        aboutPage.remove()
        box.remove()
        shadow.remove()
        icon.style.display = 'inline'
    })
})


// close message box
const popupShadow = document.querySelector('.popup_shadow')
popupShadow.addEventListener('click', function() {
    document.getElementById('popup').remove()
})