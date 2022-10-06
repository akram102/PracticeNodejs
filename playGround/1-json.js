const fs = require('fs');
const { json } = require('stream/consumers');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = JSON.parse(dataBuffer.toString());
dataJson.name = 'akram';
dataJson.age = 26;
const dataString = JSON.stringify(dataJson);
fs.writeFileSync('1-json.json',dataString);
console.log(dataJson);
