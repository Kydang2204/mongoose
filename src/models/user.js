const { Schema,model } = require('mongoose')
const mongoose = require('mongoose')
const animalSchema = new Schema({ name: String, type: String });

  // Assign a function to the "statics" object of our animalSchema
animalSchema.statics.findByName = function(name) {
    return this.find({ name: new RegExp(name, 'i') });
  };
  // Or, equivalently, you can call `animalSchema.static()`.
animalSchema.static('findByBreed', function(breed) { return this.find({ breed }); });
const Animal = mongoose.model('Animal', animalSchema);


const dog = new Animal({ name: 'fido' });
  
  (async ()=>{
      //await Animal.deleteMany({})
      
      await Animal.create(dog)

      const ex = await Animal.findByName('fido')
      console.log(ex)
  })()
  
