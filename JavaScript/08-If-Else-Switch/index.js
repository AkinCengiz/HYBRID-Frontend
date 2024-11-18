let numberOne = 23;
let numberTwo =23;
let number1 = 27;
let number2 = 33;

number1++;

if(number1 % 9 == 0){
    console.log(`Number1 değişkeni ${number1} 'nin 9 ile bölümünden kalan : ${number1 % 9} olduğundan 9 a tam bölünür.`);
}else{
    console.log(`Number1 değişkeni ${number1} 'nin 9 ile bölümünden kalan : ${number1 % 9} 'dır. `);
}

if(numberOne > numberTwo){
    console.log(`${numberOne} > ${numberTwo}`);
}else if(numberOne < numberTwo){
    console.log(`${numberOne} < ${numberTwo}`);
}else{
    console.log(`${numberOne} = ${numberTwo}`);
}


let weekDay = 6;

switch(weekDay){
    case 1 :
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4 :
        console.log("Perşembe");
        break;
    case 5 :
        console.log("Cuma");
        break;
    case 6 :
        console.log("Cumartesi");
        break;
    case 7 :
        console.log("Pazar");
        break;
    default:
        console.log("Hatalı gün değeri");
}

switch(weekDay){
    case 1:        
    case 2:        
    case 3:        
    case 4:        
    case 5:
        console.log("Hafta içi");
        break;
    case 6 :
    case 7 :
        console.log("Hafta sonu");
        break;
    default:
        console.log("Hatalı gün değeri");
}