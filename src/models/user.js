const { Schema,model } = require('mongoose')
const mongoose = require('mongoose')
const animalSchema = new Schema({ name: String, type: String });

  // Assign a function to the "statics" object of our animalSchema
animalSchema.query.byName = function(name) {
    return this.where({ name: new RegExp(name, 'i') })
  };

const Animal = mongoose.model('Animal', animalSchema);


const dog = new Animal({ name: 'fido' });
  
  (async ()=>{
      //await Animal.deleteMany({})
      
      await Animal.create(dog)

      const ex = await Animal.find().byName('fido')
      console.log(ex)
  })()

  
