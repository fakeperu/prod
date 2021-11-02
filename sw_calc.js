function isOk(num1,num2){
    return (!isNaN(num1) && !isNaN(num2) && typeof num1 === 'number' && typeof num2 ==='number')
}

function mathPart (num1,num2,action) {
switch (action){
    case '+': 
        return (num1 + num2);
    case '-':
        return(num1 - num2);
    case '*':  
        return(num1 * num2);
    case '/':
        return(num1 / num2);
    case '%':
        return(num1 % num2);
    case '**' :
        return(num1 ** num2);
    default: 
        return ('Ошибка! Калькулятор не знает что делать и очень грустит');
    }
}

function calc (num1,num2,action){
    if (isOk(num1,num2)){
        return mathPart(num1,num2,action);
    }
    else return ('error');
}

console.log(calc(1,'','+'));
