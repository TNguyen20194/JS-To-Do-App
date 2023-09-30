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


const form = document.querySelector('form.add');
const addButton = document.querySelector('#addButton');
const itemToAdd = document.querySelector('#itemToAdd');
const ul = document.querySelector('.todo');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    if(itemToAdd.value){
        const newItem = createItem(itemToAdd.value);
        ul.appendChild(newItem);
        itemToAdd.value = '';
        itemToAdd.focus();
    }
});

function createItem(val) {
    const item = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
   
    //Assign input value of the text node to the span
    span.textContent = val;
    //Add name and styling to the delete button
    delBtn.textContent = 'Delete';
    delBtn.classList.add('btn-link')

    //Add span and delBtn to the parent item
    item.appendChild(span);
    item.appendChild(delBtn);

    //Add delete funtionality to 'delete button'
    delBtn.addEventListener('click', function() {
        item.parentNode.removeChild(item)
    })

    return item;
}
