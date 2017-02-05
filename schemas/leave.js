const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaveSchema = new Schema({
	name: { type: String, index: true },
	id: { type: String, index: true },
	real_name: { type: String },
	toDate: { type: Date },
	fromDate: { type: Date },
	reason: { type: String },
	isApproved: { type: Boolean, default: null },
	leaveCode: { type: Number, index: true },
});

const LeaveMdl = mongoose.model('Leave', leaveSchema);

module.exports = LeaveMdl;