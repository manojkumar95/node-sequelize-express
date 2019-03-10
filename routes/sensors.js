const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/active-sensor', (req, res) => {
  models.Sensor.findOne({
    order: [ [ 'createdAt', 'DESC' ]],
  }).then(sensor => {
    res.status(200);
    res.send(sensor);
  });
});

module.exports = router;
