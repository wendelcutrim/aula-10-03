const http = require('http');
const port = 8000;

http.createServer(function (req,res){
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    switch (req.url) {
        case '/':
            res.end('Página Inicial');
            break;
        case '/contato':
            res.end('Página de Contato');
            break;
        case '/login':
            res.end("Página de login")
            break;
    }
}).listen(port, console.log(`Servidor rodando na porta ${port}`));