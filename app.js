// 1. User clicks on the button
// 2. We capture the text in the input field
// 3. Display the text on the screen
    // Create the element
    // Add the userTEXT to the element
    // Add the element as a child to UL
// 4. When delete is clicked, delete the item
    // Add a delete button
    // Delete button on click should  remove the item
        // Add an event listener
        // Delete the parent
// 5. After item is added, clear the text field
// 6. Auto focus after add
//7. Enable Enter-to-submit function

const form = document.querySelector('form.add')
const itemToAdd = document.querySelector('#itemToAdd');
const addButton = document.querySelector('#addButton');
const ul = document.querySelector('.todo');
const body = document.querySelector('body');
const app = document.querySelector('.app');

app.addEventListener('click', function(event){
    event.stopPropagation();
});

body.addEventListener('click', function(event){
    ul.innerHTML = '';
})

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if(itemToAdd.value){
        const newItem = createItem(itemToAdd.value);
        ul.appendChild(newItem);
        itemToAdd.value = '';
        itemToAdd.focus();
    }
});

function createItem (val) {
    const item = document.createElement('li');
    const span = document.createElement('span');
    const delButton = document.createElement('button');

    item.appendChild(span);
    item.appendChild(delButton);

    span.textContent = val;
    delButton.textContent = 'Delete';
    delButton.classList.add('btn-link')

    delButton.addEventListener('click', function() {
        item.parentNode.removeChild(item);
    })
    return item;
}