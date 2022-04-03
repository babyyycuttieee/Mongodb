const { ObjectId } = require('mongodb');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.tlq8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
    if (err){
        console.log(err.message)
        return
    }

    console.log('Connected to Mongodb');
    console.time('insert');
    
    //let result = await client.db('myFirstDatabase').collection('customer').find({}).toArray()

    let result = await client.db('myFirstDatabase').collection('customer').updateOne(
        {_id: ObjectId("623c881197c58eb9ea26d23e")},
        //{$pop: {comment: 1}}, //+ve number from behind, -ve from front
        // {$addToSet: {comment: "hello "}},
        // {$set:{comment: [
        // "budak ood siakk",
        // "pweety gurl",
        // "10/10"
        // ]}}, //sets the value of a field in a document
        //{$inc: {likes: 1}}, //increase by the value of the field by specified amount
        // {$max: {likes: 10}}, //only updates the field if the specified value is greater than existing field
        // {$unset:{likes: 0}}, //remove the specified field from a document
    )

    console.log(result)

});