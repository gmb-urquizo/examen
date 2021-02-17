const express = require("express");
const app = express();
const url = require('url');
const port = 3000;

app.get('/examen', (req, res) => {
    let numero = parseFloat(req.query.numero);
    let numero2 = parseFloat(req.query.numero2);
    let array = [numero, numero2]
    let ejercicio = req.query.ejercicio
    const examen = {
        get ejercicio() {

            switch (ejercicio) {
                case "pares":

                    for (var i = 0; i <= 100; i++) {
                        var nuevo_numero = numero + numero2;
                        array.push(nuevo_numero);

                        numero = numero2;
                        numero2 = nuevo_numero;
                    }
                return  array;
                case "impares":

                    for (var i = 2; i <= 100; i++) {
                        var nuevo_numero = numero + numero2;
                        array.push(nuevo_numero);

                        numero = numero2;
                        numero2 = nuevo_numero;
                    }
                return  array;
            }
        }
    }
    res.json(examen);
})

app.listen(port, () => console.log(`App de ejemplo se escucha en el puerto ${port}!`));