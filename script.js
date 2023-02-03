//Cashing DOM
const form = document.querySelector('form');
const clearBtn = document.getElementById('clearBtn');
const doneBtn = document.getElementsByClassName('done-Btn');
const input = document.getElementById('userinput');
const ol = document.getElementById('toDoList');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

//Create and Append elements,add classes
const createListElement = (text) => {
  // Create Div Element
  const div = document.createElement('div');
  div.classList.add('flex');
  // Create li Element
  const li = document.createElement('li');
  li.classList.add('li_list');
  li.textContent = text;
  // Create button Element
  const button = document.createElement('button');
  button.classList.add('done-Btn');
  button.textContent = 'Done';
  // Append Elements
  div.appendChild(li);
  div.appendChild(button);
  ol.appendChild(div);
};

// to show items elements after closing browser
data.forEach((item) => {
  createListElement(item);
});

// Hanlde Data from Form
const storeItems = (e) => {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  createListElement(input.value);
  input.value = '';
};

//clear localStorage and list items
const deleteItems = () => {
  localStorage.clear();
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
};

// Toggle done class on each button click
for (let i = 0; i < doneBtn.length; i++) {
  const Btn = doneBtn[i];
  Btn.addEventListener('click', () => {
    Btn.previousElementSibling.classList.toggle('done');
  });
}

form.addEventListener('submit', storeItems);
clearBtn.addEventListener('click', deleteItems);
