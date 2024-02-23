import DOM from './dom';

const dom = new DOM()

export default class Router {
  routes = {
    '/': { title: 'HOME', render: dom.mainPage.bind(dom) },
    '/project': { title: 'PROJECT', render: dom.projectPage.bind(dom) },
    '/todo': { title: 'TODO', render: dom.todoPage.bind(dom) }
  }

  navigate() {
    const view = this.routes[location.pathname]

    if (view) {
        document.title = view.title
        view.render()
    } else {
        history.replaceState("", "", "/")
        routes['/'].render()
    }
  }
}
