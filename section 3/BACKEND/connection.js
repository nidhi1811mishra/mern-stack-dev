const mongoose = require('mongoose');

const url= "mongodb+srv://nidhi1811:nidhimishra@cluster0.2arfh9h.mongodb.net/Mydb?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log('Database successfully  connected');
}).catch((err) => {
    console.log(err);
    
});

module.exports=mongoose;