var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId;

var QuoteSchema = new Schema({
	laptop: {
		type: ObjectId,
		ref: 'Laptop'
	},
	componentOptions: [{
		type: ObjectId,
		ref: 'ComponentOption'
	}]
});

module.exports = mongoose.model('Quote', QuoteSchema);