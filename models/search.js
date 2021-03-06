
 const helper = require("../helper")

 const groups = {
    Place: 1,
	Shop: 2,
	Restaurant: 3,
}

const txtGroups = {
    Place: "สถานที่ท่องเที่ยว",
	Shop: "ร้านค้า",
	Restaurant: "ร้านอาหาร",
}

 // body schema
 const bodySchemaPlace = {    
  name: '{{company.companyName}} {{company.companySuffix}}',
   group: groups.Place,
   txtGroup: txtGroups.Place,
   address: '{{address.streetAddress}}',
   phone: '{{phone.phoneNumber}}',
   email: '{{internet.email}}',
   image: '{{image.imageUrl}}',
   detail: '{{lorem.paragraph}}'  
 }

 const bodySchemaShop = {    
  name: '{{company.companyName}} {{company.companySuffix}}',
    group: groups.Shop,
    txtGroup: txtGroups.Shop,
    address: '{{address.streetAddress}}',
    phone: '{{phone.phoneNumber}}',
    email: '{{internet.email}}',
    image: '{{image.imageUrl}}',
    detail: '{{lorem.paragraph}}'  
  }

  const bodySchemaRestaurant = {    
    name: '{{company.companyName}} {{company.companySuffix}}',
    group: groups.Restaurant,
    txtGroup: txtGroups.Restaurant,
    address: '{{address.streetAddress}}',
    phone: '{{phone.phoneNumber}}',
    email: '{{internet.email}}',
    image: '{{image.imageUrl}}',
    detail: '{{lorem.paragraph}}'  
  }

const dataPlace = helper.generator(bodySchemaPlace,10)
const dataShop = helper.generator(bodySchemaShop,10)
const dataRestaurant = helper.generator(bodySchemaRestaurant,10)
const arrData =  [...dataPlace,...dataShop,...dataRestaurant]
const data = {itemTotal:arrData.length,items:arrData}

module.exports = {
   data
}