const request = require ('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiam9zaXAxNDExIiwiYSI6ImNrZTc2Z2d1bjA4cWgyeHJubTIza3B3MWEifQ.k0jL0COAySon4N2y6scADA&limit=1'

    request({url, json: true }, (error, {body}= {}) => {
        if(error){
            callback('Unable to connect to location services', undefined) //error se salje na callback u geocode poziv, a data je nedefinirana jer je nema
        }
        else if(body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)

        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode