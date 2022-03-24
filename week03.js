require("sslkeylog").hookAll();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.tlq8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
    if (err){
        console.log(err.message)
        return
    }
    console.log('Connected to Mongodb');

    // await client.db('myFirstDatabase').collection('customer').updateOne({
    // //   _id: ObjectId ("623c2a5c650c4f64f84cddf1")
    //    name: 'John'
    // },{
    //     $set:{
    //         name:"Alisha"
    //     }
    // })  

    // client.db('myFirstDatabase').collection('customer').updateOne({
    //     name: 'John'
    // },{
    //     $set:{
    //         name:"Alisha"
    //     }
    // }, { upsert: true }).then(res => {
    //     console.log(res)
    // }) 

    client.db('myFirstDatabase').collection('customer').deleteOne({
        name: 'Alice',
        age: 25
    }).then(result => {
        console.log(result.deletedCount);
    }) 


    // client.db('myFirstDatabase').collection('customer').insertOne({
    //     name: 'John',
    //     age: 30,
    //     location:'New York',
    //     isActive: true,
    //     tags: ['tag1','tag2'],
    // }).then(result => {
    //     console.log(result);
    // });

    // client.db('myFirstDatabase').collection('customer').insertOne({
    //     name: 'Johns friends',
    //     friend: result.insertedId,
    //     age: 30,
    //     location:'New York',
    //     isActive: true,
    //     tags: ['tag1','tag2'],
    // }).then(result => {
    //     console.log(result);
    // });

    // let result = await client.db('myFirstDatabase').collection('customer').insertOne({  //asynchronous cluster
    //     name: 'Alice',
    //     age: 25,
    //      location:'New York',
    //     isActive: true,
    //     tags: ['tag1','tag2'],
    // })

    // console.time('insert'); 
    // let result1 = await client.db('myFirstDatabase').collection('customer').insertOne({  //asynchronous cluster
    //     name: 'Alice',
    //     age: 25,
    //      location:'New York',
    //     isActive: true,
    //     tags: ['tag1','tag2'],
    // })
    // console.timeEnd('insert') 

    // console.time('insert'); 
    // let result1 = await client.db('myFirstDatabase').collection('customer').insertMany([
    //     {
    //       name: 'Alice',
    //       age: 25,
    //       location:'New York',
    //       isActive: true,
    //       tags: ['tag1','tag2']
    //     },
    //     {
    //       name: 'Sarah',
    //       age: 28,
    //       location:'Brazil',
    //       isActive: true,
    //       tags: ['tag1','tag2']
    //     },
    //     {
    //         name: 'Akra',
    //         age: 24,
    //         location:'Kuala Lumpur',
    //         isActive: true,
    //         tags: ['tag1','tag2']
    //       },
    // ])
    // console.timeEnd('insert') 

    // let result2 = await client.db('myFirstDatabase').collection('customer').insertOne({  //asynchronous cluster
    //     name: 'Alices Friends',
    //     friend: result.insertedId,
    //     age: 27,
    //      location:'New York',
    //     isActive: true,
    //     tags: ['tag1','tag2'],
    // })

    // console.log('Inserted 1 document', result);


    // client.db().admin().listDatabases().then(result =>{
    //     console.log(result);
    // })
    // client.db().admin().listDatabases().then(result =>{
    //     console.log(result['databases'][7]['name']);
    // })

    // client.db('sample_training').listCollections().toArray().then(result => {
    //     console.log(result[4]);
    // })

    // client.db('sample_training').collection('companies').find({  }).toArray().then(result =>{
    //     console.log(result);
    // }) 
}); 