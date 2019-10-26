var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.status(201).send({
        status: true
    });
});

app.get('/test', (req, res) => {
    res.status(201).send({
        message: "Você está na endpoint /test"
    });
});

app.listen(3000, () => {
   console.log("Conectado na porta 3000");
});