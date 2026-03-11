function somar(a, b){
    return a + b;
}
function subtrair(a, b){
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}
function dividir(a, b){
    return a / b;
}
function potenciar(a, b){
    return a ** b;
}
function calcular(a, b, operacao){
    switch (operacao){
        case 'somar':
            console.log(a + "+" + b + "=" + somar(a, b));
            historico.push(a + "+" + b + "=" + somar(a, b));
            break;
        case 'subtrair':
            console.log(a + "-" + b + "=" + subtrair(a, b));
            historico.push(a + "-" + b + "=" + subtrair(a, b));
            break;
        case 'multiplicar':
            console.log(a + "*" + b + "=" + multiplicar(a, b));
            historico.push(a + "*" + b + "=" + multiplicar(a, b));
            break;
        case 'dividir':
            console.log(a + "/" + b + "=" + dividir(a, b));
            historico.push(a + "/" + b + "=" + dividir(a, b));
            break;
        case 'potenciar':
            console.log(a + "^" + b + "=" + potenciar(a, b));
            historico.push(a + "^" + b + "=" + potenciar(a, b));
    }
}
let historico = [];
function historicoOperacoes(){
    for (let i = historico.length-1; i <= historico.length-5; i--) {
        console.log(historico[i]);
    }
}
calcular(10, 5, 'somar');
calcular(2, 5, 'subtrair');
calcular(3, 5, 'multiplicar');
calcular(4, 5, 'dividir');
calcular(5, 5, 'potenciar');
historicoOperacoes();
