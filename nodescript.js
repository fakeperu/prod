calc(1,3,'+')

function calc(a,b,c) {
    if ( isNaN(a)==true || isNaN(b)==true ) {
        console.log('Калькулятор для чисел! Оставьте свои грязные шуточки!');
        }
    if ( a=='' || b=='' || c=='' ){
    console.log('error!За пустые поля посажу');
    }
    if (c=='+')   {
        console.log(a+b);
    }
    else console.log('ae');
}