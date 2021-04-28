let nameArray = []
let nameForm = document.forms['newName'];

nameForm.addEventListener('submit', friendAdd)

function friendAdd(event){
    event.preventDefault()
    
    let nameFriend = document.querySelector('#main input[type="text"]').value;
    
    if(nameFriend.length < 1){
        alert('Pitää antaa nimi!');
        return;
    }
    nameArray.push(nameFriend);
    nameArray.sort();
    
    if(nameArray.length == 10){
        for(let i = 0; i < nameArray.length; i++) {
            let newLiName = document.createElement('li')
            let newLiText = document.createTextNode(nameArray[i])
            newLiName.appendChild(newLiText)
            newLiName.className = 'friend-list-item';
            document.querySelector('#friendList').appendChild(newLiName)
        }
        document.querySelector('#main form').remove();
        document.querySelector('h2').remove();
    }
}