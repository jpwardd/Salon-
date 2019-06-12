const express = require('express');
const connectDB = require('./config/db');


const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/employees', require('./routes/api/employees'));
app.use('/api/employeeAuth', require('./routes/api/employeeAuth'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/services', require('./routes/api/services'));
app.use('/api/clients', require('./routes/api/clients'));
app.use('/api/tickets', require('./routes/api/tickets'));


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);