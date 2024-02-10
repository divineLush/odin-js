const library = [];

function Book(title, author, pageNum) {
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
}

const renderTable = () => {
  document.querySelectorAll('table').forEach(el => el.remove());
  const table = document.querySelector('#table').content.cloneNode(true);
  document.querySelector('main').appendChild(table);
}

const addRow = (book) => {
    const row = document.querySelector('#row').content.cloneNode(true);
    const td = row.querySelectorAll('td');
    td[0].textContent = book.title || '-';
    td[1].textContent = book.author || '-';
    td[2].textContent = book.pageNum || '-';
    document.querySelector('tbody').appendChild(row);
}

const renderLibrary = () => {
  renderTable();

  library.forEach(book => {
    addRow(book);
  })
}

const displayForm = () => {
  if (document.querySelectorAll('form').length) {
    return;
  }
  const form = document.querySelector('#form').content.cloneNode(true);
  document.querySelector('header').appendChild(form);
}

const saveBook = (event) => {
  event.preventDefault();
  const formValue = Object.fromEntries(new FormData(event.target));
  const book = new Book(formValue.title, formValue.author, formValue.pages);
  library.push(book);
  if (!document.querySelector('table')) {
    renderTable();
  }
  if (document.querySelector('tbody')) {
    addRow(book);
  }
}
