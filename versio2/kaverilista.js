const nameArray = [];
let nameForm = document.forms['nameForm'];
const addButton = document.querySelector('.addButton');
const deleteButton = document.querySelector('.deleteButton');
const sortButton = document.querySelector('.sortButton');

addButton.addEventListener('click', addName);
deleteButton.addEventListener('click', deleteName);
sortButton.addEventListener('click', sortList);

function addName(event) {
    event.preventDefault();
    
    let nameFriend = document.querySelector('#main input[type="text"]').value;
    
    if(nameFriend.length < 1){
        alert('Pitää antaa nimi!');
        return;
    }
    nameArray.push(nameFriend);
    console.log(nameArray);

    const newLiName = document.createElement('li');
    const newLiText = document.createTextNode(nameArray[nameArray.length - 1]);
    newLiName.appendChild(newLiText);
    newLiName.className = 'friend-list-item';
    document.querySelector('#friendList').appendChild(newLiName);
}

function deleteName(event) {
    event.preventDefault();

    let nameFriend = document.querySelector('#main input[type="text"]').value;
    let nameIndex = (nameArray.indexOf(nameFriend));
    let deleteLiParent = document.querySelector('#friendList');
    let deleteLi = document.querySelectorAll('li');

    if(nameFriend.length < 1){
        alert('Pitää antaa nimi!');
        return;
    }

    if(nameArray.includes(nameFriend)){
        nameArray.splice(nameIndex, 1);
    }

    for(let i = 0; i < nameArray.length + 1; i++) {
        deleteLiParent.removeChild(deleteLi[i]);
    }
    
    for(let i = 0; i < nameArray.length; i++) {
        if(nameArray.length === 0) {
            break;
        }
        const newLiName = document.createElement('li');
        const newLiText = document.createTextNode(nameArray[i]);
        newLiName.appendChild(newLiText);
        newLiName.className = 'friend-list-item';
        document.querySelector('#friendList').appendChild(newLiName);
    }
}

function sortList(event) {
    event.preventDefault();
    
    let deleteLiParent = document.querySelector('#friendList');
    let deleteLi = document.querySelectorAll('li');
    
    for(let i = 0; i < nameArray.length; i++) {
        deleteLiParent.removeChild(deleteLi[i]);
    }

    nameArray.sort();

    for(let i = 0; i < nameArray.length; i++) {
        const newLiName = document.createElement('li');
        const newLiText = document.createTextNode(nameArray[i]);
        newLiName.appendChild(newLiText);
        newLiName.className = 'friend-list-item';
        document.querySelector('#friendList').appendChild(newLiName);
    }
}