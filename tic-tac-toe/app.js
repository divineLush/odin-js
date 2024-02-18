const GameBoard = (() => {
  const arr = [null, null, null, null, null, null, null, null, null];
  let currentPlayer = true;
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const getRows = () => ([arr.slice(0, 3), arr.slice(3, 6), arr.slice(6, 10)]);

  const getValueByPlayer = () => currentPlayer ? 'X' : 'O';

  const setCurrentPlayer = () => {
    document.querySelector('#player').textContent = getValueByPlayer();
  };

  const setResult = (result) => {
    document.querySelector('#result').textContent = result;
  };

  const checkDraw = () => arr.every((el) => !!el);

  const render = () => {
    setCurrentPlayer();
    const board = document.querySelector('#board');

    getRows().forEach((row) => {
      const rowEl = document.querySelector('#row').content.cloneNode(true);
      const td = rowEl.querySelectorAll('td');
      td[0].textContent = row[0];
      td[1].textContent = row[1];
      td[2].textContent = row[2];

      board.appendChild(rowEl);
    });

    document.querySelectorAll('td').forEach((el, idx) => {
      el.addEventListener('click', (e) => {
        if (e.target.textContent) {
          return;
        }

        e.target.classList.add('disabled');
        const value = getValueByPlayer();
        arr[idx] = value;
        e.target.textContent = value;

        if (checkDraw()) {
          setResult('DRAW');
          return;
        }

        currentPlayer = !currentPlayer;
        setCurrentPlayer();
      });
    });
  }

  return { render };
})();

GameBoard.render();
