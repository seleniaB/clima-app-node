const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c0eff121e0cb65bff5bb0a72b95e3a2e`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}