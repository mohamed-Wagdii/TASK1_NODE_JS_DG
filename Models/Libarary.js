const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
   
});

const BookSchema = mongoose.Schema({
    tittle:{
        type: String,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
});

module.exports = mongoose.model('Book', BookSchema);
module.exports = mongoose.model('Author', AuthorSchema);