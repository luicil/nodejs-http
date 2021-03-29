const http = require('http');

const porta = 80;

try {
    http.createServer(function(req, res){
        res.end("Servidor iniciado na porta: " + porta)
    }).listen(porta); 
    console.log("Servidor iniciado na porta: " + porta) 
} catch (error) {
    console.log("Erro no start do servidor");
}



