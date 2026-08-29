
const botonSuma = document.getElementById("boton-suma");

botonSuma.addEventListener("click", function() {
    const input1 = document.getElementById("input-numero1");
    const input2 = document.getElementById("input-numero2");

    const resultado = parseFloat(input1.value) + parseFloat(input2.value);

    alert("El resultado es: " + resultado);
});
