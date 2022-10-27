const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');

const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//Conectar con mongoDB
mongoose.connect('mongodb://localhost/cinestack', function () {
    console.log('Conexion hecha a la base de datos');
})
    .catch(error => {
        console.error('Error iniciando la aplicación', error.stack);
        process.exit(1);
    });

router.get('/', function (req, res) {
    res.json({ mensaje: 'API Inicializada:)' });
});

const puerto = process.env.API_PORT || 8081;
app.use('/', router);
app.listen(puerto, function () {
    console.log(`api corriendo en http://localhost:${puerto}`);
});