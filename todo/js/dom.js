export default class DOM {
  app = document.getElementById('app')

  cleanUp() {
    this.app.innerHTML = '';
  }

  getTemplate(id) {
    return document.getElementById(id).content.cloneNode(true)
  }

  projectsForm() {
    app.appendChild(this.getTemplate('projects-form'))
  }

  projectsList(projects) {
    const wrapper = this.getTemplate('projects-wrapper');
    const wrapperEl = wrapper.querySelector('.projects-wrapper');

    projects.forEach(({ title, desc }) => {
      const template = this.getTemplate('project')
      template.querySelector('.project__title').textContent = title
      template.querySelector('.project__desc').textContent = desc

      wrapperEl.appendChild(template)
    })

    app.appendChild(wrapper)
  }

  mainPage() {
    this.cleanUp()
    this.projectsForm()
    this.projectsList([{ title: 'title', desc: 'desc' }, { title: 'title', desc: 'desc' }, { title: 'title', desc: 'desc' }])
  }

  projectPage() {
    this.cleanUp()
  }

  todoPage() {
    this.cleanUp()
  }
}
