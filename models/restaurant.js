
 const helper = require("../helper")

  // body schema
  const bodySchema = {
    id: '{{datatype.uuid}}',
    name: '{{company.companyName}} {{company.companySuffix}}',
    address: '{{address.streetAddress}}',
    phone: '{{phone.phoneNumber}}',
    email: '{{internet.email}}',
    image: '{{image.imageUrl}}',
    detail: '{{lorem.paragraph}}'  
  }

const data = helper.generator(bodySchema,20)
  
module.exports = {
    data
}