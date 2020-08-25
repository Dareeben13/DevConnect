const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use('/api/users', require('./route/api/users'));
app.use('/api/posts', require('./route/api/posts'));
app.use('/api/auth', require('./route/api/auth'));
app.use('/api/profile', require('./route/api/profile'));

app.get('/', (req, res) => {
	res.send('Hello My Node App');
});

app.listen(PORT, () => {
	console.log(`Server is running on port : ${PORT}`);
});
