const { model } = require('mongoose')
const ParkSchema = require('./park')
const RestaurantSchema = require('./restaurant')
const RideSchema = require('./ride')
const ShopSchema = require('./shops')

const Ride = model('Ride', RideSchema)
const Park = model('Park', ParkSchema)
const Restaurant = model('Restaurant', RestaurantSchema)
const Shop = model('Shop', ShopSchema)

module.exports = {
  Ride,
  Park,
  Restaurant,
  Shop
}
