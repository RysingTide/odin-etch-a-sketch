const container = document.querySelector('.container');
const body = document.querySelector('body');
const clearBtn = document.createElement('button');

clearBtn.innerText = 'Clear';
clearBtn.style.padding = '5px 15px';
body.insertBefore(clearBtn, container);

function genBoard(val) {
  for (let i = 0; i < val; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j <= val; j++) {
      const cell = document.createElement('div');
      cell.classList.add('container-cell');
      row.appendChild(cell);
      write(cell);
    }
    container.appendChild(row);
  }
}

function write(cell) {
  cell.addEventListener('mouseover', () => {
    cell.classList.add('background');
  });
}

clearBtn.addEventListener('click', () => {
  cells = document.querySelectorAll('.background');
  cells.forEach((cell) => {
    cell.classList.remove('background');
  });
})

genBoard(100);










