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
        case 1:
            console.log(a + "+" + b + "=" + somar(a, b));
            historico.push(a + "+" + b + "=" + somar(a, b));
            break;
        case 2:
            console.log(a + "-" + b + "=" + subtrair(a, b));
            historico.push(a + "-" + b + "=" + subtrair(a, b));
            break;
        case 3:
            console.log(a + "*" + b + "=" + multiplicar(a, b));
            historico.push(a + "*" + b + "=" + multiplicar(a, b));
            break;
        case 4:
            console.log(a + "/" + b + "=" + dividir(a, b));
            historico.push(a + "/" + b + "=" + dividir(a, b));
            break;
        case 5:
            console.log(a + "^" + b + "=" + potenciar(a, b));
            historico.push(a + "^" + b + "=" + potenciar(a, b));
    }
}
let historico = [];
function historicoOperacoes(){
    for (let i = 0; i < historico.length; i++) {
        console.log(historico[i]);
    }
}
calcular(10, 5, 1);
calcular(2, 5, 2);
calcular(3, 5, 3);
calcular(4, 5, 4);
calcular(5, 5, 5);
historicoOperacoes();
