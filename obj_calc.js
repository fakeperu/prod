"use strict";

function isCorrectNumber (num1,num2) {
    if (isNaN(num1)||isNaN(num2)|| typeof(num1)!=='number'||typeof(num2)!=='number') return true;
    }

function calc (operation,num1,num2) {
const operations = {
    sum: (num1 + num2),
    minus: (num1 - num2),
    umnoj: (num1 * num2),
    del: (num2===0) ? "cant delit na nol'":(num1 / num2)
    };

    if (isCorrectNumber(num1,num2)) return "incorrected input";
    else return operations[operation];
}

console.log(calc('del',5,''));