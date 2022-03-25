const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.tlq8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
    if (err){
        console.log(err.message)
        return
    }
    console.log('Connected to Mongodb');

    client.db('UserDatabase').collection('Faker').insertOne({
        name: 'Cordell Hand',
        location:'New York',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/691.jpg',
        password: '$2a$10$3bWhco1jayIcunlHe6YqXOMxDaC1xOxMoUAYrSRdGSPV07ehIg3VG',
    }).then(result => {
        console.log(result);
    });
}); 