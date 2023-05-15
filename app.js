const mensaje = document.getElementById("resultadoId")

const perimetroCuadrado = (lado) => lado * 4;

console.log(perimetroCuadrado(5));

const areaCuadrado = (lado) => lado * lado

function calcularperimetroCuadrado() {
    let inputLado = document.getElementById('ladoCuadradoId');
    let numero = Number(inputLado.value);
    const resultado = `el perimetro es: ${perimetroCuadrado(numero)} cm.`;
    mensaje.innerText = resultado;
}
function calcularAreaCuadrado() {
    let inputLado = document.getElementById('ladoCuadradoId');
    let numero = Number(inputLado.value);
    const resultado = `el area es: ${areaCuadrado(numero)} cm.`;
    mensaje.innerText = resultado;
}

//Calcular el perimetro de un triangulo
function calcularPerimetro() {
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let lado3 = parseFloat(document.getElementById("lado3").value);

    let perimetro = lado1 + lado2 + lado3;

    document.getElementById("resultadoId").innerHTML = "El perímetro del triangulo es: " + perimetro;
}

//Calcular el area de un triangulo
const calcularAreaTriangulo = () => {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let area = (base * altura) / 2;
    document.getElementById("resultadoId").innerHTML = "El área del triángulo es: " + area;
}

// Calcular el radio de un circulo
function calcularDiametro() {
    let radio = document.getElementById("radio").value;
    let diametro = 2 * radio;
    document.getElementById("resultadoId").innerHTML = "El diámetro del círculo es: " + diametro;
}

// Calcular el perimetro de un circulo
function calcPerimetro() {
    let radio = document.getElementById("radio").value;
    let pi = 3.14159;
    let perimetro = 2 * pi * radio;
    document.getElementById("resultadoId").innerHTML = "El perímetro del círculo es: " + perimetro;
}

//Calcular el area de un circulo
function calcularArea() {
    var radio = document.getElementById("radio").value;
    var pi = 3.14159;
    var area = pi * radio * radio;
    document.getElementById("resultadoId").innerHTML = "El área del círculo es: " + area;
}