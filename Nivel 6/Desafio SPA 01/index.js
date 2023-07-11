import { Router } from './router.js'
// import { trocarBackground } from './controls.js'

import {
    backgroundHome,
      backgroundUniverse,
      backgroundExploration,
} from './events.js'

const router = new Router()
router.add('/', "../Nivel 6/Desafio SPA 01/pages/home.html")
router.add('/universo', "../Nivel 6/Desafio SPA 01/pages/universo.html")
router.add('/exploracao', "../Nivel 6/Desafio SPA 01/pages/exploracao.html")

const universoPage = document.querySelector('.universe')
const homePage = document.querySelector('.home')
const exploracaoPage = document.querySelector('.exploracao')

universoPage.addEventListener('click', function() {
    backgroundUniverse()
})
homePage.addEventListener('click', function() {
    backgroundHome()
})
exploracaoPage.addEventListener('click', function() {
    backgroundExploration()
})

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()