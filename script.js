//Cashing DOM
var enterBtn = document.getElementById('enter');
var ColorBtn = document.getElementById('backColorBtn');
var deleteBtn_div = document.getElementsByClassName(`deleteBtn`);
var input = document.getElementById('userinput');
var ul = document.querySelector('#shopping_list__items');
var body = document.getElementsByClassName(`gradient`);

//Create function to toggle li elements with .done class/
function toggleDoneClass(e) {
  const trgt = e.target.closest(`li`);
  if (trgt) trgt.classList.toggle(`done`);
}

//Accessing input element Value /
function inputLength() {
  return input.value.length;
}

//Create and Append elements,add classes. Execution of main(delete) function inside of createListElement()/
function createListElement() {
  var div = document.createElement(`div`);
  ul.appendChild(div);

  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  div.appendChild(li);
  input.value = ``;

  var delbtn = document.createElement(`button`);
  delbtn.appendChild(document.createTextNode(`Delete Button`));
  div.appendChild(delbtn);

  div.classList.add(`flex`);
  delbtn.classList.add(`deleteBtn`);
  li.classList.add(`li_listItem`);

  main();
}

//Create above elements if inputLength is > 0  with mouse click
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
//Create above elements if inputLength is > 0  with enter key
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
// random color function
function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// show Rendom Colors on backgrounds
const showRendomColor = () => {
  const rgbvalue1 = randomColor();
  const rgbvalue2 = randomColor();
  // const rgbvalue3 = randomColor();

  const RgbColorProperty = `linear-gradient(to right,${rgbvalue1},${rgbvalue2})`;
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

function main() {
  function deleteShoppingList() {
    this.parentElement.remove();
  }

  for (var i = 0; i < deleteBtn_div.length; i++) {
    var clickOnDltButton = deleteBtn_div[i];
    clickOnDltButton.addEventListener('click', deleteShoppingList, false);
  }

  enterBtn.addEventListener(`click`, addListAfterClick);

  input.addEventListener(`keypress`, addListAfterKeypress);

  ul.addEventListener(`click`, toggleDoneClass);

  ColorBtn.addEventListener(`click`, showRendomColor);
}

main();
