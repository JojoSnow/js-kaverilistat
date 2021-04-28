let nameArray = ['test']
console.log(nameArray)
let nameForm = document.forms['newName'];
let addButton = document.querySelector('input [type=submit]');

nameForm.addEventListener('submit', friendAdd)
nameList.addEventListener('click', clickAdd)

function friendAdd(event){
    event.preventDefault();
    let nameFriend = document.querySelector('input [type=text]');
    if(nameArray.length <= 10){
        if(nameFriend.length < 1){
            alert('Pitää antaa nimi!');
            return;
        }
        nameArray.push(nameFriend);
        nameArray.sort();
    }
    printArrayToList()
}

function printArrayToList(){
    for(let i = 0; i < nameArray; i++) {
        let newLiName = document.createElement('li')
        let newLiText = document.createTextNode(nameArray[i])
        newLiName.appendChild(newLiText)
        newLiName.className = 'list-item';
        document.querySelector('#friendList').appendChild(newLiName)
    }
}

function clickAdd(event){
    
}