const jsonData = require('../datafeed/sensor-data.json');
const models  = require('../models');

setTimeOutForNewDataFeed = () => {
    setInterval(constructRandomData, 15000);
}

constructRandomData = () => {
  const generateRandomSensorId = new Date().valueOf();
  models.Sensor.create({
    id: generateRandomSensorId,
    sensorId: generateRandomSensorId
  }).then(() =>{
      console.log("Sensor Id generated");
    jsonData.data.map(data => {
        const { infoId, latitude, longitude, moisture, color, gateway } = data;
      models.DataFeed.create({
          infoId,
          latitude,
          longitude,
          moisture,
          color,
          gateway,
          SensorId: generateRandomSensorId
        }).then(result =>{
            console.log("New data feed constructed for every 5 secs");
              });
    })
  });
}

module.exports = {
    setTimeOutForNewDataFeed
}