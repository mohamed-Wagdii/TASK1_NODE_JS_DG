const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    fullName:{ 
    type: String,
    required: true
    },
    phone:{
        type: [String]
    },
    socialMedia:{
        facebook:{type: String},
        linkdin:{type: String}
    }
})

module.exports = mongoose.model('Contact', ContactSchema);