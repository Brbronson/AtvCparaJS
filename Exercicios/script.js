function calcularSalario() {
    const hora = 10.00;
    const horaextra = 15.00;

    let horasNormais = parseFloat(document.getElementById('horas_normais').value);
    let horasExtras = parseFloat(document.getElementById('horas_extras').value);

    let horasNormaisResult = horasNormais * hora;
    let horasExtrasResult = horasExtras * horaextra;
    let totalGanho = horasNormaisResult + horasExtrasResult;
    let poupanca = totalGanho * 0.08;

    document.getElementById('resultado1').innerHTML = `
        <hr>
        <strong>Valor de horas normais:</strong> R$ ${horasNormaisResult.toFixed(2)}<br>
        <strong>Valor de horas extras:</strong> R$ ${horasExtrasResult.toFixed(2)}<br>
        <strong>Total de ganho no ano:</strong> R$ ${totalGanho.toFixed(2)}<br>
        <strong>Valor a guardar na poupança:</strong> R$ ${poupanca.toFixed(2)}<br>
        <hr>
    `;
}

function mostrarInfoPessoal() {
    let code = parseInt(document.getElementById('code').value);
    let age = parseInt(document.getElementById('age').value);
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    document.getElementById('resultado2').innerHTML = `
        <hr>
        <strong>Código:</strong> ${code}<br>
        <strong>Idade:</strong> ${age}<br>
        <strong>Altura:</strong> ${height.toFixed(2)}<br>
        <strong>Peso:</strong> ${weight.toFixed(2)}<br>
        <hr>
    `;
}


function calcularSoma() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado = num1 + num2;

    document.getElementById('resultado3').innerText = `O resultado da soma é: ${resultado}`;
}

function contagemRecursiva(x = 0) {
    if (x <= 100) {
        let resultado = document.getElementById('resultado4');
        resultado.innerText += x + "-";
        contagemRecursiva(x + 1);
    }
}



function calcularQuadrado() {
    let num = parseInt(document.getElementById('numQuad').value);
    let quadrado = num * num;

    document.getElementById('resultado5').innerText = `O quadrado de ${num} é: ${quadrado}`;
}