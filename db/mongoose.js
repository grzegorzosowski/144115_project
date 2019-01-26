const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin12345@cluster0-shard-00-00-rqy2g.mongodb.net:27017,cluster0-shard-00-01-rqy2g.mongodb.net:27017,cluster0-shard-00-02-rqy2g.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {
    useNewUrlParser: true
})
    .then(() => console.log('Connected..'))
    .catch(err => console.error('Connection failed', err));
module.exports = { mongoose }