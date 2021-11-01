document.querySelector('.btn').addEventListener('click', calc1);
document.querySelector('.btn2').addEventListener('click', calc2);
document.querySelector('.btn3').addEventListener('click', calc3);
document.querySelector('.btn4').addEventListener('click', calc4);
document.querySelector('.btn5').addEventListener('click', calc5);
document.querySelector('.btn6').addEventListener('click', clearInput);

function calc1() {
    let a = +document.querySelector('.input1').value;
    let b = +document.querySelector('.input2').value;
    let c = '+';
    if ( isNaN(a)==true || isNaN(b)==true ) {
        console.log('Калькулятор для чисел! Оставьте свои грязные шуточки!');
        document.querySelector('.otvet').innerHTML = 'Калькулятор для чисел!';
        document.querySelector('.input1').value='';
        document.querySelector('.input2').value='';
        return false;
    }
    if ( a=='' || b=='' || c=='' ){
        document.querySelector('.otvet').innerHTML ='error!За пустые поля посажу';
        return false;
   }
    if (c=='+') {
        document.querySelector('.otvet').innerHTML = 'Ответ = ' + (a + b);
    }
    else console.log('poputal bratok');

}
function calc2() {
    let a = +document.querySelector('.input1').value;
    let b = +document.querySelector('.input2').value;
    let c = '-';
    if ( isNaN(a)==true || isNaN(b)==true ) {
     console.log('Калькулятор для чисел! Оставьте свои грязные шуточки!');
     document.querySelector('.otvet').innerHTML = 'Калькулятор для чисел!';
     document.querySelector('.input1').value='';
     document.querySelector('.input2').value='';
    return false;
    }
    if ( a=='' || b=='' || c=='' ){
        document.querySelector('.otvet').innerHTML ='error!За пустые поля посажу';
        return false;
}
    else if (c=='-'){
        console.log(a - b);
        document.querySelector('.otvet').innerHTML="Если их вычесть, то получится "+ (a-b);
    }
    else console.log('poputal bratok');
}
function calc3() {
    let a = +document.querySelector('.input1').value;
    let b = +document.querySelector('.input2').value;
    let c = '/';
    if ( isNaN(a)==true || isNaN(b)==true ) {
     console.log('Калькулятор для чисел! Оставьте свои грязные шуточки!');
     document.querySelector('.otvet').innerHTML = 'Калькулятор для чисел!';
     document.querySelector('.input1').value='';
     document.querySelector('.input2').value='';
    return false;
    }
    if ( a=='' || b=='' || c=='' ){
        document.querySelector('.otvet').innerHTML ='error!За пустые поля посажу';
        return false;
    }
    else if (c=='/'){
        document.querySelector('.otvet').innerHTML="Ответ " + (a/b);
    }
    else console.log('poputal bratok');
}
function calc4() {
    let a = +document.querySelector('.input1').value;
    let b = +document.querySelector('.input2').value;
    let c = '*';
    if ( isNaN(a)==true || isNaN(b)==true ) {
     console.log('Калькулятор для чисел! Оставьте свои грязные шуточки!');
     document.querySelector('.otvet').innerHTML = 'Калькулятор для чисел!';
     document.querySelector('.input1').value='';
     document.querySelector('.input2').value='';
    return false;
    }
    if ( a=='' || b=='' || c=='' ){
        document.querySelector('.otvet').innerHTML ='error!За пустые поля посажу';
        return false;
    }
    else if (c=='*'){
        document.querySelector('.otvet').innerHTML="Ответ " + (a*b);
    }
    else console.log('poputal bratok');
}
function calc5() {
    let a = +document.querySelector('.input1').value;
    let b = +document.querySelector('.input2').value;
    let c = '%';
    if ( isNaN(a)==true || isNaN(b)==true ) {
     console.log('Калькулятор для чисел! Оставьте свои грязные шуточки!');
     document.querySelector('.otvet').innerHTML = 'Калькулятор для чисел!';
     document.querySelector('.input1').value='';
     document.querySelector('.input2').value='';
    return false;
    }
    if ( a=='' || b=='' || c=='' ){
        document.querySelector('.otvet').innerHTML ='error!За пустые поля посажу';
        return false;
    }
    else if (c=='%'){
        document.querySelector('.otvet').innerHTML='Ответ - ' + a%b ;
    }
    else console.log('poputal bratok');
}
function clearInput() {
    document.querySelector('.input1').value='';
    document.querySelector('.input2').value='';
}