const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) =>{
	const { email } = req.body;
	try{
		/*'await' garante que Só passa para próxima linha após concluir excução.*/
		if(await User.findOne({ email }))
			return res.status(400).send({ error: 'User already exists ' });

		const user = await User.create(req.body);
		/*Fazendo com que o password não exiba a senha criptografada após requisição*/
		user.password = undefined;

		return res.send({ user });
	} catch(err){
		return res.status(400).send({ error: 'Registration failed ' });
	}
});

module.exports = app => app.use('/auth', router);