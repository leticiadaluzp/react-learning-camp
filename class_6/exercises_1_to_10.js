//Ejercicio 1
const myName = "Leticia";
let myAge = 19;

console.log(myName);
console.log(myAge);

//Ejercicio 2
console.log(`Hola, me llamo ${myName} y tengo ${myAge} años.`)

//Ejercicio 3
const sum = (a, b) => a + b;

//Ejercicio 4
const myArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const duplicate = (x) => (x*2);

const mapArray = myArray.map(duplicate);

console.log(mapArray);

//Ejercicio 5
const evenNumber = (x) => x % 2 === 0;

const filterArray = myArray.filter(evenNumber);

console.log(filterArray);

//Ejercicio 6
function sumOfArrayNumbers (array){
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumOfArrayNumbers(myArray))

//Ejercicio 7
const arrayOne = ["a","b","c"];
const arrayTwo = ["d","e","f"];
const letters = [...arrayOne, ...arrayTwo];
console.log(letters);

//Ejercicio 8
const movie = {title: "Inside Out", genre: "Animation", releaseYear: 2015}
const {title, genre, releaseYear} = movie;

//Ejercicio 9
function movieInfo (movie) {
    const {title, genre, releaseYear} = movie;
    return `La película "${title}" es de género ${genre} y se lanzó en el año ${releaseYear}.`;
}

//Ejercicio 10
function positiveNumber (number){
    try {
        if (number < 0) {
            throw new Error("El número es negativo");
        }
        console.log(`El número es: ${num}`);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}
