const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion **Lugar
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

//Clima
// clima.getClima(42.4583, -7.7333)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {


    try {

        const coords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}.`;

    } catch (e) {

        return `No se puede determinar el clima de ${direccion}`;

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);