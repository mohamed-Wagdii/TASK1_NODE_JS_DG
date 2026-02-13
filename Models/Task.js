const monogoose = require('mongoose');

const taskSchema = new monogoose.Schema({
    title:{
        type: String,
        required: true
    },
    isCompleted: {
        type:Boolean,
        default: false
    }
})

module.exports = monogoose.model('Task', taskSchema);