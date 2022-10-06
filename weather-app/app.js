const request = require('request');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');


const location = process.argv[2];
if(!location){
    return console.log('Please provide location!!!')
}
geoCode(location,(error,data)=>{
    if(error){
        return console.log(error)
    }
    // console.log(data)
    forecast(data.latitude,data.longitude, (error,data)=>{
        if(error){
            return console.log(error)
        }
        console.log(`temperature is ${data.temperature}`);
    })
})
console.log(process.argv[2])



