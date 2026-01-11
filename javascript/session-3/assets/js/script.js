const formItem = document.getElementById('form');
const inputItem = document.getElementById('input-item');
const inputInvalid = document.getElementById('input-invalid');
const listItem = document.querySelector('.list-item');

const addItem = e => {
    e.preventDefault();
    const newItem = inputItem.value;

    // Valid Input
    if (newItem === "") {
        inputInvalid.innerText = "Please add an item!!";
        inputItem.style.border='1px solid red';
        return;
    } else {
        inputInvalid.innerText = "";
        inputItem.style.border='none';
    }

    addItemToDom(newItem);

    inputItem.value = '';
}

formItem.addEventListener('submit', addItem);

// Function Add Item To Dom
const addItemToDom = (item) => {
    // Create li
    const li = creatLi('item-list');

    // Create checkbox + label
    const checkboxDiv = creatCheckbox(item);
    li.appendChild(checkboxDiv);

    // Create icon
    const icon = craetIcon('trash-icon remove-item');
    li.appendChild(icon);


    listItem.appendChild(li);

}

// Function Create li
const creatLi = (classes) => {
    const li = document.createElement('li');
    li.className = classes;
    return li;
}

// Function Create checkbox + label
const creatCheckbox = (text) => {
    const div = document.createElement('div');
    div.className = 'checkbox-parent';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'item-checkbox';
    checkbox.style.cursor='pointer';
    // checkbox.id = 'item-checkbox';

    const label = document.createElement('label');
    // label.htmlFor = checkbox.id;
    label.className = 'checkbox-name';
    label.innerText = text;

    div.appendChild(checkbox);
    div.appendChild(label);

    return div;
}

// Function Create icon
const craetIcon = (classe) => {
    const icon = document.createElement('img');
    icon.className = classe;
    icon.src = "./assets/images/Trash-icon.png";
    icon.alt = 'Trash Picture';

    return icon;
}

// Remove item
const removeItem = e => {
    if (e.target.classList.contains('remove-item')) {
        const li = e.target.closest('li');
        const checkbox = li.querySelector('.item-checkbox');

        if (checkbox && checkbox.checked) {
            li.remove();
        } else {
            alert('Select a Target!!!');
        }
    }
}

listItem.addEventListener('click', removeItem);