function suma() {
    var num1 = document.getElementById('Numero1').value;
    var num2 = document.getElementById('Numero2').value;
    var res = parseFloat(num1) + parseFloat(num2)
    document.getElementById("Resultado").value = res;
}
function resta() {
    var num1 = document.getElementById('Numero1').value;
    var num2 = document.getElementById('Numero2').value;
    var res = parseFloat(num1) - parseFloat(num2)
    document.getElementById("Resultado").value = res;
}
function mul() {
    var num1 = document.getElementById('Numero1').value;
    var num2 = document.getElementById('Numero2').value;
    var res = parseFloat(num1) * parseFloat(num2)
    document.getElementById("Resultado").value = res;
}
function div() {
    var num1 = document.getElementById('Numero1').value;
    var num2 = document.getElementById('Numero2').value;
    var res = parseFloat(num1) / parseFloat(num2)
    document.getElementById("Resultado").value = res;
}