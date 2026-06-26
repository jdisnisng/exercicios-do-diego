function contarLetra(texto, letra) {
    let vezletra = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            vezletra++;
        }
    }

    return vezletra;
}

console.log(contarLetra("skibidi", "b"));