
var faker = require('faker');

// random generator
const generator = (schema, max) => {
    max = max || min
    
      const arr = new Array(max).fill({
          id : faker.datatype.number()
      });


      return arr.map(() => {
        
           let obj = Object.keys(schema)      
            .reduce((entity, key) => {

                entity[key] = getFake(schema[key]) ?? schema[key]

                return entity
              }, {})

            return obj
            })
  }

  const getFake = (fakeData) => {
      try{
        return faker.fake(fakeData)
      }catch{
        return null
      }
  }

  exports.generator = generator