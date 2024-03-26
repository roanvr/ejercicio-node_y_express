const http = require ('http');

http
    .createServer((req, res) => {
    if (req.url == '/Inicio' && req.method == "GET") {
    res.end('Hola mundo! Servidor con Node js puro');
}
})
.listen(3001, () => {
    console.log('El servidor está inicializando en el puerto 3001');
});