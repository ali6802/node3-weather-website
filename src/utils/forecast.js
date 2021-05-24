const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f993688aeee06a3768acf9642d7bff63&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " F out."+"It feels like "+response.body.current.feelslike+" F . Humidity is "+response.body.current.humidity+"%, The cloudcover is "+response.body.current.cloudcover+"%")
        }
    })
}

module.exports = forecast