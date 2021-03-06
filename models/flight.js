var mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: { type: Date },
    
  });

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']    
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().getFullYear() + 1;
         }
        },
    airport: {
            type: String,
            enum: ['AUS', 'DAL', 'LAX', 'SEA'],
            default: 'SEA'
        }, 
    
 destinations: [destinationSchema],

 tickets: [{
   type: Schema.Types.ObjectId, 
   ref: 'Ticket'
  }]         
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);