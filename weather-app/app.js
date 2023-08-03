const request = require('request')
require('dotenv').config()

const url = 'http://api.weatherstack.com/current?access_key='+process.env.WEATHER_STACK_API_KEY+'&query=New%20York&units=f'

/*
 * use units=f to get temperature in fahrenheit
 * use units=m to get temperature in celsius
 * use units=s to get temperature in kelvin
 * don't forget to add &units=f at the end of the url in order to change the unit
 * the default unit is celsius
 *
 * another hint is that percip means rain percentage of occurance
 *
 * when use json : true, the response.body will be a json object instead of a string
 */

request({ url: url , json : true }, (error, response) => {
    // console.log(response.body)
    const data = response.body
    // console.log(data)    // this will print out the whole json object
    const current = response.body.current
    console.log('It is currently '+current.temperature+'f degrees out. There is a '+current.precip+'% chance of rain.' + ' It feels like ' + current.feelslike + ' degrees out.')
})

const searchTerm = 'Los Angeles'

const accessToken = process.env.MAPBOX_API_KEY

const limit = 1

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+searchTerm+'.json?access_token='+accessToken+'&limit='+limit
request({ url: geocodeUrl , json : true }, (error, response) => {
    // const data = response.body
    // const features = response.body.features
    // const center = features[0].center
    // console.log('The latitude of '+searchTerm+' is '+center[1]+' and the longitude is '+center[0])

    const data = response.body
    const features = response.body.features
    const center = features[0].center
    const latitude = center[1]
    const longitude = center[0]
    console.log('The latitude of '+searchTerm+' is '+latitude+' and the longitude is '+longitude)
})
