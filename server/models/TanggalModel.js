var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TanggalSchema = new Schema({
	timestamps: true
});

module.exports = mongoose.model('Tanggal', TanggalSchema);