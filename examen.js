const express = require("express");
const app = express();
const url = require('url');
const port = 3000;

app.get('/examen', (req, res) => {
    let numero = parseFloat(req.query.numero);
    let serie = [0,1];
    let pares = req.query.serie;
    let impares = req.query.serie;
    const examen = {
        get ejercicio() {

            if (numero % 2 === 0) {
                    for (let i = 0; i <= 20; i++) {
                        var numeroAnterior = serie[serie.Length - 2];
                        var numeroFinal = serie[serie.Length - 1];
                        let nuevoNumero = ultimo + anterior;
                        serie.push(nuevoNumero);
                    }
                return  pares;
        } else {
            (numero % 2 !== 0) {
                    for (let i = 0; i <= 10; i++) {
                        var numeroAnterior = serie[serie.Length - 2];
                        var numeroFinal = serie[serie.Length - 1];
                        let nuevoNumero = ultimo + anterior;
                        serie.push(nuevoNumero);
                    }
                return  impares;
        }
            
    }
    res.json(examen);
})

app.listen(port, () => console.log(`App de ejemplo se escucha en el puerto ${port}!`));
