const axios = require("axios");

const getLugarLatLng = async dir => {
  const encodedUrl = encodeURI(dir);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
    headers: {
      "X-RapidAPI-Key": "42fbe5a134mshb5d450569ba82c2p140a13jsn62f8663a9d32"
    }
  });

  const resp = await instance.get();

  if (resp.data.Results.length == 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return { direccion, lat, lng };
};

module.exports = {
  getLugarLatLng
};
