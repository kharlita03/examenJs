alert ("Digite dos numeros entre 1 y 10, para generar las tablas de los numeros comprendidos entre ellos")

var num1 = parseFloat(prompt("Ingrese el primer numero"))
var num2 = parseFloat(prompt("Ingrese el primer numero"))
let num 


if (num2>10) {
    alert ("ERROR. Ningun valor puede ser mayor a 10")
} else {
    for(let num=num1; num <= num2; num++){
        for(let i=1; i<=10; i++){
            if( num2 >10){
            }else
            console.log(num + " x " + i + " = " + num*i)
        }
        
        console.log(" \n ")
    }
}
