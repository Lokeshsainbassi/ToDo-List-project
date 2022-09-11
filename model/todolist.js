const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
    task:String,
    desc:String
})

module.exports = mongoose.model('list',listSchema )