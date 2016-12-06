/*document.write('<h1>Hello World</h1>')
console.log('Hello World');
alert('Hello World');
*/
//var name = prompt('Enter your name');
//document.write('Hello ' + name);
/*
var year = Number (prompt('year'));
var month = Number (prompt('month'));
var day = Number (prompt('day'));

var summ =add(year, month) + day;
document.write(summ);

function add(a, b) {
    return a + b;
}
*/
function getage(age) {
    if (age >= 18) {
        return 'Adult';
    }else {
        return 'child';
    }
}
var age =Number (prompt('enter your age'));
var result = getage(age);
document.write(result); 

Math.sqrt()//добуває корінь квадратний
//перевірити рівність чисел if(d===0)