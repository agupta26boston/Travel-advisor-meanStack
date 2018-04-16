const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var app = express();

const api = require('./routes/api')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// extended: false, flag will restrict the use of nested object.
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
