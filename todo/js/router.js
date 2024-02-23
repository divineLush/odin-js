import DOM from './dom';

const dom = new DOM()

export default class Router {
  routes = {
    '/': { title: 'HOME', render: dom.mainPage.bind(dom) },
    '/todo': { title: 'TODO', render: dom.todoPage.bind(dom) }
  }

  navigate() {
    const view = location.pathname.includes('todo') ? this.routes['/todo'] : this.routes['/']
    document.title = view.title
    view.render()
  }
}
