function multiplicar() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;

    let resultado = numero1 * numero2;

    document.getElementById("resultado").textContent = resultado;
}
