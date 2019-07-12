const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c9c7bcfec15a49e1df704fe9e5b365d0&units=metric`
  );
  return resp.data.main;
};

module.exports = {
  getClima
};
