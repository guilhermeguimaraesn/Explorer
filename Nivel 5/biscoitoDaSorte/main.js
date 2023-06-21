const buttonCookie = document.querySelector('.cookie')
const screenOne = document.querySelector('.screen1')
const screenTwo = document.querySelector('.screen2')
const resetCookie = document.querySelector('.resetCookie')

buttonCookie.addEventListener('click', function () {
    screenOne.classList.add('hide')
    screenTwo.classList.remove('hide')
})

resetCookie.addEventListener('click', function(){
    screenOne.classList.remove('hide')
    screenTwo.classList.add('hide')
})