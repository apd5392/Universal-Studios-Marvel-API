const {model} = require('mongoose')
const ParkSchema = require('./park')
const ResturantSchema = require('./resturant')
const RideSchema = require('./ride')
const ShopSchema = require('./shops')

const Ride = model("Ride", RideSchema)
const Park = model('Park', ParkSchema)
const Resturant = model('Resurant', ResturantSchema)
const Shop = model('Shop', ShopSchema)

module.exports={
    Ride,
    Park,
    Resturant,
    Shop
}