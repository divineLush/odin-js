export default class Todo {
  getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || []
  }

  getTodo(todoTitle) {
    return this.getTodos().find(({ title }) => title === todoTitle)
  }

  appendTodo(todo) {
    localStorage.setItem('todos', JSON.stringify([...this.getTodos(), todo]))
  }
}
