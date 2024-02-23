export default class Todo {
  getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || []
  }

  getTodo(todoTitle) {
    return this.getTodos().find(({ title }) => title === todoTitle)
  }

  rmTodo(todoTitle) {
    const todos = this.getTodos().filter(({ title }) => title !== todoTitle)
    return localStorage.setItem('todos', JSON.stringify(todos))
  }

  appendTodo(todo) {
    localStorage.setItem('todos', JSON.stringify([...this.getTodos(), todo]))
  }
}
