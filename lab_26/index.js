"use strict"
const express = require('express');
const app = express();
const connect = require('./db/connection');
const productRouter = require('./routs/productRouter');
const authRouter = require('./routs/authRouter');

connect();
const PORT = 3000;
app.use(express.static('public'));
app.use(express.json());
app.use('/product', productRouter);
app.use('/auth', authRouter);

app.get('/product/list', (req, res)=>{
	res.json({message: 'product list'});
});

app.get('/', (req, res)=>{
	res.json({message: 'Hello from server!'});
});

app.post("/product/create", (req, res)=>{
	console.log(req.body);
	res.json({message: 'received!'});
});

app.put("/product/:id", (req, res)=>{
	const { id } = req.params;
	res.json({message: 'received! ${id}'});
});

app.delete("/product/:id", (req, res)=>{
	const { id } = req.params;
	res.json({message: 'deleted! ${id}'});
});

app.listen(PORT, ()=>{
	console.log('Server is running on http://localhost:'+PORT);
});
