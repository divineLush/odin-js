const DOM = (() => {
  const clearProjects = (() => {
    document.querySelector('#projects').replaceChildren();
  })();

  const addProject = (title, desc) => {
    const el = document.querySelector('#project').content.cloneNode(true);
    el.querySelector('.project__title').textContent = title;
    el.querySelector('.project__desc').textContent = desc;
    document.querySelector('#projects').appendChild(el);
  }

  return { clearProjects, addProject };
})();

const Projects = (() => {
  const projects = [{ title: 'asdfs', desc: 'qwfefewq'}, { title: 'asdfs', desc: 'qwfefewq'}, { title: 'asdfs', desc: 'qwfefewq'}, { title: 'asdfs', desc: 'qwfefewq'}];

  const render = () => {
    // DOM.clearProjects();
    projects.forEach(({ title, desc }) => DOM.addProject(title, desc));
  };

  return { render };
})();

Projects.render();
