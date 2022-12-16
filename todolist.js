let parent = document.querySelector('.parentClass');
let todoText = document.querySelector('.inputClass');
let addBtn = document.querySelector('.addBtnClass');
let todoul = document.querySelector('.todoulclass');
let removeele = document.querySelector('.removeItem');

addBtn.addEventListener('click',function addTask(){
    // console.log(todoText.value);
    if(todoText.value.trim() === ''){
        alert('Enter some text');
    }else{
        console.log(todoText.value.trim());
        let liTag = document.createElement('li');
        let spanText = document.createElement('span');
        spanText.innerHTML = todoText.value;
        liTag.appendChild(spanText);
        spanText.addEventListener('click',(e) => {
            console.log(e.target);
            e.target.classList.toggle('done');            
        })
        let spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML = '&times;';
        spanClose.addEventListener('click', (e) => {
            console.log(e.target.parentElement);
            let li = e.target.parentElement;
            li.parentElement.removeChild(li);
        })
        liTag.appendChild(spanText);
        liTag.appendChild(spanClose);
        todoul.appendChild(liTag);
        todoText.value = ' ';
    }
})
removeele.addEventListener('click',function(){
    while(todoul.lastChild){
        todoul.removeChild(todoul.lastChild);
            }
})