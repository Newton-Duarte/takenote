const app = require('express')();

app.get('/', (req, res) => res.json({ success: true, message: 'Welcome to Take Note!' }));

app.listen(3333, () => console.log('Server running on port 3333.'));