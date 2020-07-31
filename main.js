
/// Writing expressions with variables
var myName = "Luana"
console.log('My name is '+myName)

var age = 20
console.log("i'm "+age+' years old')

var ignasiAge = 32

var ageDiff = ignasiAge - age
console.log('la diferencia de edad con Ignasi es de '+ageDiff + ' años')

// Writing code with conditionals

if(age <= 21) {
    console.log("You are not older than 21")
} 
else{
    console.log("You are older than 21")
}

if(age > ignasiAge){
    console.log(" Ignasi is younger than you")
}
else{
    if(age == ignasiAge){
        console.log("You have the same age as Ignasi")
    }else{
        console.log("Ignasi is older than you")
    }
}
// Sorting an Array
console.log("..........EJERCICIOS DE ARRAY............\n")
nameList
var  nameList= ["Katherine", "Janneth", "Nicole", "Belén", "Reyna", "Victoria", "Luana", "Florencia", "Nadine", "Andrea", "Melissa", "Carolina", "Macarena", "Gabriela", "Ayelen", "Malena", "Yennyfer", "Veronica", "Micaela", "Azucena", "Belén",  "Florencia", "Yael", "Rocío", "Magalí",  "Camila", "Carla", "Rodrigo", "Branko"]
nameList.sort();
console.log(nameList)
console.log('El primer nombre del array es ' + nameList[0])
console.log('El ultimo nombre del array es ' + nameList[nameList.length -1])

for (var i = 0; i < nameList.length; i++) {
    console.log(nameList[i])
  }
//Looping over an array 

console.log('..........EJERCICIO 2 DE ARRAY............\n')
var ageList = [ 32, 49, 26, 20, 20, 18, 19, 24, 22, 23, 24, 22, 23, 24, 21, 21, 22, 20, 24, 25, 22, 19, 20, 23, 23, 23, 24, 21, 22, 23, 20, 21, 24, 20, 19]

console.log('Mostrar edades pares')
var ind = 0
while (ind < ageList.length) {
    // console.log(ageList[ind])
    if((ageList[ind]%2) == 0){
        // console.log("Even")
        console.log(ageList[ind])
    }
    ind ++;
}
console.log('Mostrar edades pares con un for')

for(var i=0;i < ageList.length; i++){
    if(ageList[i]%2==0)(
    console.log(ageList[i])
    )
}    
//Functions that use arrays
console.log('Funciones con array')    

function menorNumero(array){
    var menor = array[0];
    for(var i=0; i< array.length; i++){
        if(array[i] < menor){
            menor=array[i]
        }
    }
    console.log('El menor del array es ' + menor)
}

menorNumero(ageList)

function mayorNumero(array){
    var mayor = array[0];
    for(var i=0; i<array.length; i++){
        if(array[i] > mayor){
            mayor=array[i]
        }
    }
    console.log('El mayor del array es ' + mayor)
}
mayorNumero (ageList)

function searchInTheIndex(array,index){
    console.log(array[index -1 ])
    }
    console.log(ageList)

    searchInTheIndex(ageList,1)

    //Ejercicio 6

function searchForRepeats(array){
    var repetidos=[];
    var objetoAuxiliar={};
    for(var i=0; i< array.length; i++){
        if(!objetoAuxiliar[array[i]]){
            objetoAuxiliar[array[i]]=0;
        }
        objetoAuxiliar[array[i]] += 1;
    }
    for(propiedad in objetoAuxiliar){
        if(objetoAuxiliar[propiedad] > 1){
            repetidos.push(propiedad)
        }

    }
    console.log("los numeros repetidos son ", repetidos)
}
searchForRepeats(ageList)

//Ejercicio 7
function arrayIntoString(myArray){
    return myArray.toString()
}

myColors = ["Magenta", "Blue", "yellow", "pink"];

console.log( arrayIntoString(myColors) )

function arrayToString(array){
    var frase = "";
    for(var i=0; i < array.length ; i++){
        frase +='"';
        frase += array[i];
        frase +='"';
        if(i < array.length -1){
            frase +=', ';
        }
    }
    return frase;
}
console.log(arrayToString(myColors))

//Explicacion de functions

function searchPares(array){
    var pares =[];
    for(var i=0; i < array.length; i++){
        if(array[i] % 2 ==0){
            pares.push(array[i]);
        }
    }
    return pares;
}
function searchMayor(array){
    var mayor=array[0];

    for (let index = 0; index < array.length; index++){
        if(array[index] > mayor){
            mayor = array[index];
        }
    }
    return mayor
}

console.log("El mayor es " + searchMayor(ageList) )
console.log( searchPares(ageList) )
console.log( searchMayor( searchPares(ageList) ) )

//function flecha 
    
var cosas = ["cafe ", "taza ", "agua ", "computadora"]
function funcionAngular(){
    console.log("Angular " + cosas)
}

funcionAngular()

const funcionFlecha = () => {
    console.log("Flecha: " + cosas);
}
funcionFlecha() 

console.log("........STRING FUNCTIIONS EXERCISES..........") 

//1

const revertInt = (number) => {
    const numberList = Array.from(number.toString())
    let newNumber = ''
    numberList.forEach((n,i) => {
        newNumber += numberList[(numberList.length-1)-i]
    })
    return parseInt(newNumber)
}

console.log(revertInt(32443))

//2
function returnAlphaString(str){
    const strList = Array.from(str.toLowerCase())
    let finalStr = '';
    strList.sort()

    for (let index = 0; index < strList.length; index++){
        finalStr += strList[index]
    }

    return finalStr
}

console.log( returnAlphaString('webmaster') )
console.log( returnAlphaString('OTORRINolaringologia') )

//3
function returnUppercase(str){
    let strList= str.split(" ");
    let finalStr = [];
    strList.forEach(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const stringMinusFirstLetter = word.substring(1);

        finalStr.push(firstLetter + stringMinusFirstLetter) 
    })

    return finalStr.join(" ");

}

console.log( returnUppercase("prince of persia") )

//4

const longestWord = (str) => {
    const strList = str.split(" ");
    let biggestLength = strList[0].length
    let finalWord = '';
    strList.forEach( e => {
        if(e.length > biggestLength) {
            biggestLength = e.length
            finalWord = e
        }
    })
    return finalWord
}

console.log(longestWord("Web Development Tutorial"))