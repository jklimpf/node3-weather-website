const request = require ('request')


const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=22422f6466f1fab29b61628160f43a43&query=' + latitude +','+ longitude + '&units=m'
    
    request ({url, json: true}, (error, {body}= {}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }
            else if (body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + '. Its currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' + 
            ' \nHumidity is '+ body.current.humidity + ' ,and it feels like '+ body.current.feelslike + ' degrees ' )
        }
    
    })
    
 }

 module.exports = forecast