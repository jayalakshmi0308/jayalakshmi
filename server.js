const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3001; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'app')));

app.post('/api/users', (req, res) => {
    const newUser = req.body;

    fs.readFile(path.join(__dirname, 'db.json'), (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read users' });
        }

        const db = JSON.parse(data);
        const existingUser = db.users.find(user => user.email === newUser.email);
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }

        db.users.push(newUser);

        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(db, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save user' });
            }
            res.status(201).json(newUser);
        });
    });
});

app.get('/api/signin', (req, res) => {
    const { email, pass } = req.query;

    fs.readFile(path.join(__dirname, 'db.json'), (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read users' });
        }

        const db = JSON.parse(data);
        const user = db.users.find(u => u.email === email && u.pass === pass);
        if (user) {
            res.json({ users: [user] });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
