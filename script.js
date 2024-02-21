
let list = document.querySelector('#myList');
let input = document.querySelector('#item');
let btn = document.querySelector('#btn');

function addItem() {
    let myItem = input.value;
    

    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    let listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";

    list.appendChild(listItem);


listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
});

input.focus();
input.value = '';

}

btn.addEventListener('click', addItem);

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});