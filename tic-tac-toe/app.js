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

  const checkVictory = () => {
    const value = getValueByPlayer();

    const checkValue = array => array.every(el => el === value);

    const rows = getRows()
      .map(row => checkValue(row))
      .find(el => !!el);

    if (rows) {
      return true;
    }

    const diag = (() => {
      const primary = [arr[0], arr[4], arr[8]];
      const secondary = [arr[2], arr[4], arr[6]];

      return checkValue(primary) || checkValue(secondary);
    })();

    if (diag) {
      return true;
    }

    const cols = (() => {
      const first = [arr[0], arr[3], arr[6]];
      const second = [arr[1], arr[4], arr[7]];
      const third = [arr[2], arr[5], arr[8]];

      return checkValue(first) || checkValue(second) || checkValue(third);
    })();

    if (cols) {
      return true;
    }

    return false;
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

        if (checkVictory()) {
          setResult(`PLAYER ${getValueByPlayer()} WINS`);
          return;
        }

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
