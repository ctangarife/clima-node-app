const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dorección de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

// lugar
//   .getLugarLatLng(argv.direccion)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const getInfo = async direccion => {
  
  try {
    let coord= await lugar.getLugarLatLng(direccion)  
    let temp = await clima.getClima(coord.lat,coord.lng)
    let merge = { ...coord, ...temp }
    //El clima de xxx es de xx
    return `El clima de ${merge.direccion} es de ${merge.temp}`;
  } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`
  }



 
  //No se pudo determinar el clima
};

getInfo(argv.direccion)
  .then(resp => {
    console.log(resp);
  })
  .catch(err => {
    console.log(err);
  });
