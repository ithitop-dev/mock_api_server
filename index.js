// index.js

const searchModel = require('./models/search.js')
const restaurantModel = require('./models/restaurant.js')

module.exports = () => {
    const data = { 
        restaurants : restaurantModel.data,
        search: searchModel.data
    }
    return data
  }