const express = require('express');
const app = express ();

app.listen(3002, () => {
    console.log('El servidor está inicializado en el puerto 3002');
});

app.get('/TocToc', (req, res) => {
    res.send('¿Quién es?');
});

app.get('*', (req, res) => {
    res.send('<center><h1>Sorry, aquí no hay nada :/ </h1></center>');
});