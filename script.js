const inputbox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputbox.value === ''){
        alert(' You muust write Something ');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li); // Used to display anything 
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData(); // Whenever we will add any new task this function will be called and the new data that is created will be saved, so that even after refreshing browser will not loose any data
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();