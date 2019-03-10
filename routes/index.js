const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  models.DataFeed.findAll({
  }).then(datafeeds => {
    res.send({
      datafeeds: datafeeds
    });
  });
});

module.exports = router;
