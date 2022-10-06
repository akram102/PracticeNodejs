const request = require('request');

const geoCode = (location,callback)=>{
    const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoiYWtyYW0xMDJ6YWtpIiwiYSI6ImNsMG8yc21wdTFoZXAzYnF0OHJoeXRxemUifQ.3jcuWa96eIUi68xw0KsJzg&limit=1`;
    request({url : geoURL,json :true},(error,response)=>{
        if(error){
            callback('Unable to connect to Geocode API!!!',undefined)
        }else if(response.body.features.length == 0){
            callback('No data found for search result',undefined)
        }else{
            const latitude = response.body.features[0].center[1];
            const longitude = response.body.features[0].center[0];
            const location = response.body.features[0].place_name;
            callback(undefined,{latitude,longitude,location})
        }
    })
}

module.exports = geoCode;