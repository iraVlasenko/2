
//--------------------------------Задание 1---------------------------
//1. Создать форму, при заполнении которой, все заполненные данные будут отображаться на странице.


let form = document.getElementById('form');
let someName = null;
let arr = [];
let div = document.createElement('div');
    div.className = "alert";
    form.after(div); 


function handlerInput(param, index) {
    arr.push(form.getElementsByTagName('input')[index - 1].value)
    div.innerHTML = `<strong>Введенные дынные: </strong> ${arr.join(',   ')}`;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(arr);
});
//---------------------------------Задание 2--------------------------
let divFlowers = document.getElementById('flowers');

let images = ["flower1", "flower2","flower3","flower4"];

for (let i = 0; i < images.length ; i++) {
    elem = `<img src="./images/${images[i]}.jpg">` ;
    divFlowers.insertAdjacentHTML('beforeend',elem);
}
//----------------------------------Задание 3--------------------------
let divColor = document.querySelector('.divTest');

document.getElementById('test').addEventListener('change',() => {
   let i = (document.getElementById('test').value);
   console.log(i);
   divColor.style.backgroundColor = i;
})
 //----------------------------------Задание 4--------------------------
 

 let form1 = document.getElementById('form1');
 let rows = document.getElementById('row');
 let columns = document.getElementById('column');
 let tbody = document.getElementById('tbody');


 
 rows.addEventListener('input', () => {

    for (let i = 1; i <= rows.value; i++) {
        console.log(i);
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        
        columns.addEventListener('input', () => {

         for (let j = 1; j <= columns.value; j++) {
             console.log(j);

            let td = document.createElement('td');
            tbody.tr[j].appendChild(td);
            }

        }
        );
    
}
});




