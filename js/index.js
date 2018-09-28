/*const userName = prompt('Enter your name');
const greetings= 'Hello ' +userName;
alert(greetings);

const userAge = parseInt(prompt('Enter your age'));
const nextAge = userAge + 1;
alert('Next year you will be '+nextAge);

const userMonth = parseInt(prompt('Enter your month'));
const divMonth = userMonth/2;
alert('Your dividing month will be ' +divMonth );*/

/*const userAge = parseInt(prompt('Enter your age'));
if (userAge > 18) {
    //if true
    alert('You are adult');
    }
else {alert('You are child')
//if false
} */
function addOne(num) {
    const newNum = num + 1;
    return newNum;
}
let result = addOne(10);
alert(result);
result = addOne(result);
alert(result);

result = Math.sqrt(16);
alert(result);