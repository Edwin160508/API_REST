const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


require('./app/controllers/authController')(app);
require('./app/controllers/projectController')(app);

app.listen(port);
