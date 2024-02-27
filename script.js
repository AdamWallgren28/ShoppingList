
let list = document.querySelector('#myList');
let input = document.querySelector('#item');
let btn = document.querySelector('#btn');

//lägger till li i ul
function addItem() {
    let myItem = input.value;
    
    let listItem = document.createElement('li');    //skapar li-elemnt
    let listText = document.createElement('span');  //skapar textspan
    let listBtn = document.createElement('button'); //skappar knapp (för delete)

    listItem.appendChild(listText);                 //infogar textSpan i li
    listText.textContent = myItem;                  //infogar input i textSpan
    listItem.appendChild(listBtn);                  //infogar knapp i li
    listBtn.textContent = "Delete";                 //infogar text i knapp
    list.appendChild(listItem);                     // infogar li i ul

    //tar bort li-element
    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
    input.value = '';
}
//Lägg till input i ul, via knapp
btn.addEventListener('click', addItem);
//Lägg till input i ul, via Enter
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});

/*Save/Download button */
saveBtn.addEventListener('click', () => {
    alert ("Do you want to download this list?");

    const listContent = Array.from(list.children).map(item => {
        /*Exkluderar delete-knappen i det sparade txt-dokumentet*/
        const textElement = item.querySelector('span');
        if (item.tagName.toLowerCase() === 'li' && textElement) {
            return textElement.textContent;
        } else {
            return '';
        }
    }).join('\n');
    const blob = new Blob([listContent], { type: 'text/plain' });   /*Skapar en blob att lagra texten binärt */
    const url = URL.createObjectURL(blob);                          /*skapar en url för bloben som browsern kan hantera */

    const a = document.createElement('a');                          /*Skapar ett ankare*/
    a.href = url;                                                   /*Ger ankaret en referens*/
    a.download = 'shoppingList.txt';                                /*Ger ankaren ett download-atttribut*/
    document.body.appendChild(a);                                   /*Fäster ankaret i DOM*/
    a.click();                                                      /*Klickar ankaret (utan klick) = laddar ner*/
    document.body.removeChild(a);                                   /*Tar bort anakert efter nedladdning*/
    URL.revokeObjectURL(url);                                       /*Tar bort url med lokal data*/
});