const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*Instalando Rotas do tipo Get em app.*/ 
const projectController = require('./app/controllers/projectController');
app.use('/projects', projectController);

require('./app/controllers/authController')(app);
app.listen(port);
