/**
 * 
 * @param str 
 */
function reverseString(str: string){
    //dentro de la funcion se puede utilizar el siguiente metodo
    return str.split("").reverse().join("");
}
console.log(reverseString("Hola, sigo aprendiendo js para ser un desarrollador semi senior"))