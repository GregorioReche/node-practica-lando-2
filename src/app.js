const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.resolve(__dirname, 'views'));

app.use(express.static('public'));

const staticRouter = require('./routes/statics');

app.use('/', staticRouter);

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));