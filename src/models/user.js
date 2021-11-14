const { Schema,model } = require('mongoose')
const mongoose = require('mongoose')
const animalSchema = new Schema({
  name: String,
  type: String,
  tags: { type: [String], index: true } // field level
});
animalSchema.set('autoIndex', true)
animalSchema.index({ name: 1, type: -1 }); 
const Animal = mongoose.model('Animal', animalSchema);

const dog = new Animal({ name: 'fido' , type :"dog",tags:["a","b"]});
 (async ()=>{
      await Animal.deleteMany({})
      
      await Animal.create(dog)

      const ex = await Animal.find({})
      console.log(ex)
  })()

  
