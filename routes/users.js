const routesUsers = require('express').Router();

const fs = require('fs');

fs.readFile('./data/users.json', { encoding: 'utf8' }, (err, data) => {
  routesUsers.get('/users', (req, res) => {
    res.send(JSON.parse(data));
  });
  routesUsers.get('/users', (req, res) => {
    res.send(JSON.parse(data));
  });
  routesUsers.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = JSON.parse(data).find(user => id === user._id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({"message": "Нет пользователя с таким id"});
    }
  });
});

module.exports = routesUsers;