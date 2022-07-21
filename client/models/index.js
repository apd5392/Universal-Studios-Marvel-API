const { model } = require('mongoose')
const ParkSchema = require('./park')
const RestaurantSchema = require('./restaurant')
const Ride = model('Ride', RideSchema)
const Park = model('Park', ParkSchema)
const Shop = model('Shop', ShopSchema)

module.exports = {
  Ride,
  Park,
  Restaurant,
  Shop
}
