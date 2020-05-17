//targetting button
const btn = document.querySelector('button');
//console.log(btn);
btn.addEventListener('click', getNumber);
let number = 1;
//console.log(number);




function getNumber() {
    const li = document.createElement('li');
    //console.log(li);
    li.textContent = number;
    if (number % 3 == 0) {

        li.classList.add("big");
    }

    document.body.appendChild(li);
    number += 2;

}