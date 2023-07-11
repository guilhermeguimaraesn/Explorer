import {Router} from './route.js'

const router = new Router()
router.add('/', "../pages/home.html")
router.add('/about',"../Nivel 6/PROJETO 07/pages/about.html")
router.add('/contact',"../Nivel 6/PROJETO 07/pages/contact.html")
router.add(404,"../Nivel 6/PROJETO 07/pages/404.html")

// const routes = {
//   "/": "../Nivel 6/PROJETO 07/pages/home.html",
//   "/about": "../Nivel 6/PROJETO 07/pages/about.html",
//   "/contact": "../Nivel 6/PROJETO 07/pages/contact.html",
//   "404": "../Nivel 6/PROJETO 07/pages/404.html",
// }

// function route(event) {
//   event = event || window.event
//   event.preventDefault()

//   window.history.pushState({}, "", event.target.href)

//   handle()
// }

// function handle() {
//   const { pathname }  = window.location
//   const route = routes[pathname] || routes[404]
//   fetch(route)
//   .then(data => data.text())
//   .then(html => {
//     document.querySelector('#app').innerHTML = html
//   })
// }

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
