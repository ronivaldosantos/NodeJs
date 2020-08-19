function soma(a,b){
    return a+b;
}

function mult(a,b){
    return a * b;
}

function sub (a,b){
    return a-b;
}

function div (a,b){
    return a/b;
}

// Exporta a função soma para outros módulos do sistema.
module.exports = {
    soma,
    mult,
    sub,
    div
}; 