var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var DataSchema = new Schema({
	timestamps: true
});

module.exports = mongoose.model('Data', DataSchema);