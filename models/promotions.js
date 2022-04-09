//creating promotions schema

const mongoose = require('mongoose')

require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const Schema = mongoose.Schema;

const PromotionSchema = new Schema(
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
		label: {
			type: String,
			default: ""
		},
		price: {
			type: Currency,
			required: true,
			min: 0
		},
		featured: {
			type: Boolean,
			default: false
		},
		description: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true,
	}
);

const promotions = mongoose.model("promotion",PromotionSchema);

module.exports = promotions;