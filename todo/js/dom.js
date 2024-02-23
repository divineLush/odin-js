import Todo from './todo'

export default class DOM {
  app = document.getElementById('app')

  cleanUp() {
    this.app.innerHTML = '';
  }

  getTemplate(id) {
    return document.getElementById(id).content.cloneNode(true)
  }

  todoForm() {
    const form = this.getTemplate('todo-form')
    form.querySelector('.todo-form').addEventListener('submit', (e) => {
      e.preventDefault()
      const formValue = Object.fromEntries(new FormData(e.target));
      new Todo().appendTodo(formValue)
      document.querySelector('.todo-wrapper').appendChild(this.getTodoTemplate(formValue))
    });

    app.appendChild(form)
  }

  getTodoTemplate(todo) {
    const template = this.getTemplate('todo')
    template.querySelector('.todo__title').textContent = todo.title
    template.querySelector('.todo__desc').textContent = todo.desc

    return template
  }

  todoList(todoList) {
    const wrapper = this.getTemplate('todo-wrapper');
    const wrapperEl = wrapper.querySelector('.todo-wrapper');

    todoList.forEach(todo => {
      wrapperEl.appendChild(this.getTodoTemplate(todo))
    })

    app.appendChild(wrapper)
  }

  mainPage() {
    this.cleanUp()
    this.todoForm()
    this.todoList(new Todo().getTodos())
  }

  todoPage() {
    this.cleanUp()
  }
}
