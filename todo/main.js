import './style.css'
import Router from './js/router'

const router = new Router()

window.addEventListener('click', e => {
    if (!e.target.matches('[data-link]')) {
      return
    }

    e.preventDefault()
    history.pushState('', '', e.target.dataset.link)
    router.navigate()
})

window.addEventListener('popstate', router.navigate.bind(router))
window.addEventListener('DOMContentLoaded', router.navigate.bind(router))
