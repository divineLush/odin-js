import DOM from './dom';

const dom = new DOM()

const routes = {
  '/': { title: 'HOME', render: dom.mainPage.bind(dom) },
  '/project': { title: 'PROJECT', render: dom.projectPage.bind(dom) },
  '/todo': { title: 'TODO', render: dom.todoPage.bind(dom) }
}

export default class Router {
  constructor() {
    window.addEventListener('click', e => {
        if (!e.target.matches('[data-link]')) {
          return
        }

        e.preventDefault()
        history.pushState('', '', e.target.href)
        this.navigate()
    })

    window.addEventListener("popstate", this.navigate)
    window.addEventListener("DOMContentLoaded", this.navigate)
  }

  navigate() {
    const view = routes[location.pathname]

    if (view) {
        document.title = view.title
        view.render()
    } else {
        history.replaceState("", "", "/")
        routes['/'].render()
    }
  }
}
