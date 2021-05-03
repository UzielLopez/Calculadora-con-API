const cors = require('cors');
const express = require('express');

const server_api = express();
server_api.use(cors());
server_api.options('*', cors());

const port = 8012;

server_api.get('/', (req, res, next) => {
    res.send('Oh, ¡hola! Esta es mi API para mi calculadora ...');
});

server_api.get('/sum', (req, res, next) => {
    var a = req.query.a;
    var b = req.query.b;

    var result = parseFloat(a) + parseFloat(b);
    var resjson = {
        result: result
    }
    res.send(resjson);
});

server_api.get('/subs', (req, res, next) => {
    var a = req.query.a;
    var b = req.query.b;

    var result = parseFloat(a) - parseFloat(b);
    var resjson = {
        result: result
    }
    res.send(resjson);
});

server_api.get('/mult', (req, res, next) => {
    var a = req.query.a;
    var b = req.query.b;

    var result = parseFloat(a) * parseFloat(b);
    var resjson = {
        result: result
    }
    res.send(resjson);
});

server_api.get('/div', (req, res, next) => {
    var a = req.query.a;
    var b = req.query.b;

    var result = parseFloat(a) / parseFloat(b);
    var resjson = {
        result: result
    }
    res.send(resjson);
});

server_api.get('/pow', (req, res, next) => {
    var a = req.query.a;
    var b = req.query.b;

    var result = Math.pow(parseFloat(a), parseFloat(b));
    var resjson = {
        result: result
    }
    res.send(resjson);
});


server_api.listen(port, () => 
    console.log('listening on port ' + port)
);