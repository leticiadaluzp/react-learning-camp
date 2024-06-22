function sum(a, b) {
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    let result;
    try{
        if (b === 0) {
            throw new Error("División por cero");
        }
        return a / b;
    } catch (error) {
        console.log("No se puede realizar la operación: " + error.message);
        result = null;
    }
    
    return result;
}


function squareRoot(a) {
    let result;
    try{
        if (a < 0) {
            throw new Error("Raíz cuadrada de un número negativo");
        }
        result = Math.sqrt(a);
    } catch (error) {
        console.log("No se puede realizar la operación: " + error.message);
        result = null;
    }
    
    return result;
} 

function power(a, n) {
    let result;
    try{
        result = a ** n;
    } catch (error) {
        console.log("No se puede realizar la operación: " + error.message);
        result = null;
    }
    
    return result;
}