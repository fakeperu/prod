"use strict";
function calc (operation,num1,num2) {
    const operations = {
        sum: (num1 + num2),
        minus: (num1 - num2),
        umnoj: (num1 * num2),
        del: (num2===0) ? "i can't'":(num1 / num2) //эсли num2 равен нулю, то выдаст ошибку, в противном случае выдаст деление
        };

    if (isNaN(num1)||isNaN(num2)|| typeof(num1)!=='number'||typeof(num2)!=='number'){ //если num1 или num2 не являются числом, то программа прервется с ошибкой 
         return "incorrected input";
    }
    else if (operation in operations) { //operation (что мы передаем внизу) присутствует в массиве operations - получаем true 
        return operations[operation];
    }
    else {                              //такой operation в массиве нет - получаем ошибку
        return 'error';
    }
}
console.log(calc('sum','',2));
