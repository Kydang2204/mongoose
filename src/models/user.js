const { Schema,model } = require('mongoose')
const mongoose = require('mongoose')
const animalSchema = new Schema({ name: String, type: String });

animalSchema.methods.findSimilarTypes = async function() {
    const a = await  mongoose.model('Animal').find({ type: this.type })
    console.log(a)
  };

const Animal = mongoose.model('Animal', animalSchema);

const dog = new Animal({ type: 'meo' });
  
  (async ()=>{
      //await Animal.deleteMany({})
      
      await Animal.create(dog)
  })()

  dog.findSimilarTypes()
  
