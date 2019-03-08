const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  models.User.findAll({
    include: [ models.Task ]
  }).then(users => {
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

module.exports = router;
