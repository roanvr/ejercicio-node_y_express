const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('El servidor está inicializdo en el puerto http://localhost:n3000')
})
app.get('/Inicio', (req, res) => {
    res.send('Hola mundo! Servidor con Express js &#128526;')
});