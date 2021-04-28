let nameArray = []
let nameForm = document.forms['nameForm'];

nameForm.addEventListener('submit', addName)
nameForm.addEventListener('submit', deleteName)

function addName(event) {
    event.preventDefault()
    
    let nameFriend = document.querySelector('#main input[type="text"]').value;
    
    if(nameFriend.length < 1){
        alert('Pitää antaa nimi!');
        return;
    }
    nameArray.push(nameFriend);
    
    for(let i = 0; i < nameArray.length; i++) {
        let newLiName = document.createElement('li')
        let newLiText = document.createTextNode(nameArray[i])
        newLiName.appendChild(newLiText)
        newLiName.className = 'friend-list-item';
        document.querySelector('#friendList').appendChild(newLiName)
    }
}

function deleteName(event) {
    event.preventDefault()

    let nameFriend = document.querySelector('#main input[type="text"]').value;

    if(nameFriend.length < 1){
        alert('Pitää antaa nimi!');
        return;
    }

    for(let i = 0; i < nameArray.length; i++){
        if(nameArray[i] === nameFriend){
            nameArray.splice(i, 1);
        }
    }
}