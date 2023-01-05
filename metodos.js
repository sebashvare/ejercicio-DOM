/**
 *  JavaScript manipulacion del DOM
 *  Para seleccionar una etiqueta en el html utilizamos la funcion querySelector. Esta nos permite
 *  seleccionar Clases, Etiquetas, ID.
 *  innerHtml = Permite modificar el HTML
 */

// Manipulular el titulo de nuestro proyecto
const titulo = document.querySelector("h1").innerText = "Hola Sebastian";
// Cambiar el titulo del HTML
const valor = document.querySelector("input").value;
btn = document.querySelector("#calcular");
btn.addEventListener("click", () => {
    calcular();
    console.log("Funcion anonima");
})


function calcular() {
    let numero1 = document.querySelector("#numero1").value;
    let numero2 = document.querySelector("#numero2").value;
    let resultado = Number(numero1) + Number(numero2);
    console.log("Resultado = " + resultado)
    document.querySelector("#resultado").innerText = "Resultado de la suma: " + resultado;
    if (resultado > 0) {
        // Limpiar Inputs
        console.log("Ingresamos a la condicion: " + resultado);
        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";

    }
}
