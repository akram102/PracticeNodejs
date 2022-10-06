const request = require('request');

const forecast = (latitude,longitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=546cf2f55bf5edac20c656f716699bc6&query=${latitude},${longitude}`;
    request({url,json : true},(error,response)=>{
        if(error){
            callback('Unable to connect to weatherstack api!!!',undefined)
        }else if(response.body.error){
            callback(response.body.error.info,undefined)
        }else{
            callback(undefined,response.body.current)
        }
    })
}

module.exports = forecast;