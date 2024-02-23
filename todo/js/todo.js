export default class Todo {
  getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || []
  }

  appendTodo(todo) {
    localStorage.setItem('todos', JSON.stringify([...this.getTodos(), todo]))
  }
}
