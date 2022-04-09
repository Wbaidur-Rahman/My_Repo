//crating leader schema

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const leaderSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			uniqe: true
		},

		image: {
			type: String,
			required: true
		},

		designation: {
			type: String,
			required: true
		},

		abbr: {
			type: String,
			required: true
		},

		featured: {
			type: Boolean,
			default: false
		},

		description: {
			type: String,
			required: true
		},
	},
	{
		timestamps: true,
	}

);

const Leader = mongoose.model("Leader", leaderSchema);

module.exports = Leader;

