function calc(num1, num2, action) {
    if ( typeof num1 !== 'number' || typeof num2 !== 'number'|| isNaN(num1)==true || isNaN(num2)==true ) {
        return('Калькулятор для чисел! Оставьте свои грязные шуточки!');
        }
    if ( num1==undefined || num2 ==undefined || action=='' ){
        return('error!За пустые поля накажу');
    }
    if (action=='+')   {
        return (num1 + num2);
    }
    if (action=='-')   {
        return(num1 - num2);
    }
    if (action=='*')   {
        return(num1 * num2);
    }
    if (action=='/')   {
        if(num2 == 0){
            return ('На ноль делить неправославно!');
            }
        return(num1 / num2);
    }
    if (action=='%')   {
        if(num2 == 0){
            return('На ноль делить неправославно!');
            }
        return(num1 % num2);
    }
    else return ('Ошибка! Калькулятор не знает что делать и очень грустит')
}
console.log(calc(8, 56 , ' '));