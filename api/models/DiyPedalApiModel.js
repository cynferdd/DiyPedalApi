'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComponentSchema = new Schema({
    name:{
        type: String,
        require: 'A component must have a name'
    }, 
    family: {
        type: [{
            type: String,
            enum: ['resistor', 'capacitor', 'diode', 'transistor', 'inductor', 'integrated circuit', 'microcontroller', 'relay', 'switch', 'potentiometer', 'dc jack', 'audio jack', 'socket', 'led', 'enclosure', 'other']
        }],
        default: ['resistor']
    },
    description: {
        type: String
    }
});

var PedalSchema = new Schema({
    name:{
        type: String,
        require: 'Kindly enter the name of the pedal'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    },
    components: [ComponentSchema],
    comment:{
        type: String
    }
});

module.exports = mongoose.model('Pedals', PedalSchema);