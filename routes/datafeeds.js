const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/:sensor_id', (req, res) => {
  models.DataFeed.findAll({
    where: {
      SensorId: req.params.sensor_id
    }
  }).then(datafeeds => {
    res.status(200);
    res.send(datafeeds);
  });
});

module.exports = router;
