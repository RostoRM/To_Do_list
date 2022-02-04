//Cashing DOM
const enterBtn = document.getElementById('enter');
const ColorBtn = document.getElementById('backColorBtn');
const deleteBtn_div = document.getElementsByClassName(`deleteBtn`);
const input = document.getElementById('userinput');
const ul = document.querySelector('#shopping_list__items');
const body = document.getElementsByClassName(`gradient`);

//Create function to toggle li elements with .done class/
const toggleDoneClass = (e) => {
  const trgt = e.target.closest(`li`);
  if (trgt) trgt.classList.toggle(`done`);
};

//Accessing input element Value /
const inputLength = () => {
  return input.value.length;
};

//Create and Append elements,add classes. Execution of main(delete) function inside of createListElement()/
const createListElement = () => {
  let div = document.createElement(`div`);
  ul.appendChild(div);

  let li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  div.appendChild(li);
  input.value = ``;

  let delbtn = document.createElement(`button`);
  delbtn.appendChild(document.createTextNode(`Delete Button`));
  div.appendChild(delbtn);

  div.classList.add(`flex`);
  delbtn.classList.add(`deleteBtn`);
  li.classList.add(`li_listItem`);

  main();
};

//Create above elements if inputLength is > 0  with mouse click
const addListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement();
  }
};
//Create above elements if inputLength is > 0  with enter key
const addListAfterKeypress = (event) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
};
// random color function
const randomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
// show Rendom Colors on backgrounds
const showRendomColor = () => {
  let rgbvalue1 = randomColor();
  let rgbvalue2 = randomColor();
  // const rgbvalue3 = randomColor();

  let RgbColorProperty = `linear-gradient(to right,${rgbvalue1},${rgbvalue2})`;
  for (const allbody of body) {
    allbody.style.background = RgbColorProperty;
  }
  for (const allDltBtn of deleteBtn_div) {
    allDltBtn.style.background = RgbColorProperty;
  }
  enterBtn.style.background = RgbColorProperty;
  ColorBtn.style.background = RgbColorProperty;
  input.style.background = RgbColorProperty;
};

//Executiing  DeleteFunction,which deletes elements and main Function which executes eventListeners /

const main = () => {
  function deleteShoppingList() {
    this.parentElement.remove();
  }

  for (let i = 0; i < deleteBtn_div.length; i++) {
    let clickOnDltButton = deleteBtn_div[i];
    clickOnDltButton.addEventListener('click', deleteShoppingList, false);
  }

  enterBtn.addEventListener(`click`, addListAfterClick);

  input.addEventListener(`keypress`, addListAfterKeypress);

  ul.addEventListener(`click`, toggleDoneClass);

  ColorBtn.addEventListener(`click`, showRendomColor);
};

main();
