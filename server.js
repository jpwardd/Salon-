const express = require('express');
const connectDB = require('./config/db');


const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);