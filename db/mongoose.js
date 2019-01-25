const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://lolhax18:gregor95!@ds027688.mlab.com:27688/colonycreator', {
    useNewUrlParser: true
})
    .then(() => console.log('Connected..'))
    .catch(err => console.error('Connection failed', err));
module.exports = { mongoose }