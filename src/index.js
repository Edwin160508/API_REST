const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*Rotas
app.get('/', (req, res)=>{
	res.send('OK');
});*/
require('./controllers/authController')(app);
app.listen(port);
