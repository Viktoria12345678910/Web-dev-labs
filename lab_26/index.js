"use strict"
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));
app.use(express.json());

const fs = require('fs');

app.use((req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
  fs.appendFile('log.txt', log, (err) => {
    if (err) console.log(err);
  });
  next(); // important! moves to the next route
});

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
