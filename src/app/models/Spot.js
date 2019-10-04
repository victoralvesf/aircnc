const mongoose = require('../../database/connection');

const SpotSchema = new mongoose.Schema({
    thumbnail: {
        type: String
    },
    company: {
        type: String
    },
    price: {
        type: Number
    },
    techs: [{
        type: String
    }],
    createdByUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot', SpotSchema);