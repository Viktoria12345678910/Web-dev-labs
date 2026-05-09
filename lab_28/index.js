const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./db/connection');
const authRouter = require('./routes/authRouter');
require('dotenv').config();

connect();

app.use(cors());
app.use(express.json());
app.use('/api', authRouter);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
