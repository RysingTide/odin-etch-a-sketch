const container = document.querySelector('.container');
const body = document.querySelector('body');
const clearBtn = document.createElement('button');
const slider = document.querySelector('.slider');
const sliderVal = document.querySelector('.slider-val');

clearBtn.innerText = 'Clear';
clearBtn.style.padding = '5px 15px';
body.insertBefore(clearBtn, container);

function genBoard(num) {
  for (let i = 0; i < num; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < num; j++) {
      const cell = document.createElement('div');
      cell.classList.add('container-cell');
      row.appendChild(cell);
      write(cell);
    }
    container.appendChild(row);
  }
  sliderVal.innerText = `${slider.value} x ${slider.value}`;
}

function write(cell) {
  cell.addEventListener('mouseover', () => {
    cell.classList.add('background');
  });
}

function clear() {
  cells = document.querySelectorAll('.background');
  cells.forEach((cell) => {
    cell.classList.remove('background');
  });
}

clearBtn.addEventListener('click', () => {
  clear();
  while (container.firstChild) container.removeChild(container.firstChild); 
  genBoard(slider.value);
})

slider.addEventListener('change', () => {
  clear();
  while (container.firstChild) container.removeChild(container.firstChild); 
  genBoard(slider.value);
})

genBoard(slider.value);






