const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
const writeBtn = document.createElement('button');
const clearBtn = document.createElement('button');
const rgbaBtn = document.createElement('button');
const erasorBtn = document.createElement('button');
const slider = document.querySelector('.slider');
const sliderVal = document.querySelector('.slider-val');

writeBtn.innerText = 'Write';
btnContainer.appendChild(writeBtn);

erasorBtn.innerText = 'Erasor';
btnContainer.appendChild(erasorBtn);

rgbaBtn.innerText = 'Rainbow';
btnContainer.appendChild(rgbaBtn);

clearBtn.innerText = 'Clear';
btnContainer.appendChild(clearBtn);

function genBoard(num) {
  for (let i = 0; i < num; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < num; j++) {
      const cell = document.createElement('div');
      cell.classList.add('container-cell');
      row.appendChild(cell);
      write(cell);
      writeBtn.addEventListener('click', () => {
        write(cell);
      })
      rgbaBtn.addEventListener('click', () => {
        rgba(cell);
      })
      erasorBtn.addEventListener('click', () => {
        erase(cell);
      })
    }
    container.appendChild(row);
  }
  sliderVal.innerText = `${slider.value} x ${slider.value}`;
}

function write(cell) {
  cell.addEventListener('mouseover', () => {
    cell.style.background = 'black';
  });
}

function rgba(cell) {
  color = () => {
  let o = Math.round;
  let r = Math.random;
  let s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }
  cell.addEventListener('mouseover', () => {
    cell.style.background = `${color()}`;
  })
}

function erase(cell) {
  cell.addEventListener('mouseover', () => {
    cell.style.background = 'white';
  });
}

function clear() {
  cells = document.querySelectorAll('.background');
  cells.forEach((cell) => {
    cell.style.background.remove;
  });
}

clearBtn.addEventListener('click', () => {
  clear();
  while (container.firstChild) container.removeChild(container.firstChild); 
  genBoard(slider.value);
});

slider.addEventListener('input', () => {
  clear();
  while (container.firstChild) container.removeChild(container.firstChild); 
  genBoard(slider.value);
});

genBoard(slider.value);





