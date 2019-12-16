const routesUsers = require('express').Router();
const fs = require('fs');
const path = require('path');

const filepath = path.join('./data', 'users.json');

routesUsers.get('/users', (req, res) => {
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    const users = JSON.parse(data);
    res.send(users);
  });
});

routesUsers.get('/users/:id', (req, res) => {
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    const users = JSON.parse(data);
    const { id } = req.params;
    const user = users.find(user => id === user._id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({"message": "Нет пользователя с таким id"});
    }
  });
});

module.exports = routesUsers;
