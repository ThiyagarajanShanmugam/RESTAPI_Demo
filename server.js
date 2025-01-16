const express = require('express');
const Joi = require('joi');
const helmet = require('helmet');
const users = require('./MOCK_DATA.json'); //loading data from mock_data.json file

const app = express();
const port = 3000;

app.use(express.json());
app.use(helmet());



// Validation Schema using JOI
const userSchema = Joi.object({
    first_name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    gender: Joi.string().valid("Male", "Female", "Other").required(),
    Skill: Joi.string().min(3).required()
});

// Welcome Route
app.get('/', (req, res) => {
    res.send('Welcome to the Secure User API!');
});

// GET All Users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET a User by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');
    res.json(user);
});

// POST a New User
app.post('/api/users', (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newUser = {
        id: users.length + 1,
        first_name: req.body.first_name,
        email: req.body.email,
        gender: req.body.gender,
        Skill: req.body.Skill
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT (Update) a User
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');

    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    user.first_name = req.body.first_name;
    user.email = req.body.email;
    user.gender = req.body.gender;
    user.Skill = req.body.Skill;
    res.json(user);
});

// DELETE a User
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found.');

    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser);
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send('Route not found.');
});

// Start the Server
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
