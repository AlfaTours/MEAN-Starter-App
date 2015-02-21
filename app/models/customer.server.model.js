'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	date: {
		type: Date,
		default: Date.now,
		required: 'Please fill Date',
		trim: true
	},
	exname: {
		type: String,
		default: '',
		required: 'Please fill Excursion name',
		trim: true
	},
	guide: {
		type: String,
		default: '',
		required: 'Please fill Guide name',
		trim: true
	},
	tourists: [{
					tname: {
						type: String,
						required: 'Please fill tourist name',
						trim: true
					},
					hotel: {
						type: String,
						required: 'Please fill hotel name',
						trim: true
					},
					tel: {
						type: String,
						required: 'Please fill tourists tel',
						trim: true
					},
					qadult: {
						type: Number,
						required: 'Please fill adults quantity',
						trim: true
					},
					qchild: {
						type: Number,
						required: 'Please fill childrens quantity',
						trim: true
					},
					usdneed: {
						type: Number,
						default: 0,
						required: 'Please fill USD needed'
					},
					vndneed: {
						type: Number,
						default: 0,
						required: 'Please fill VND needed'
					},
					usdpayed: {
						type: Number,
						default: 0,
						required: 'Please fill USD payed'
					},
					vndpayed: {
						type: Number,
						default: 0,
						required: 'Please fill VND payed'
					},
					salesman1: {
						type: String,
						required: 'Please fill first salesman'
					},
					salesman2: {
						type: String,
						required: 'Please fill second salesman'
					},
					location: {
						type: String,
						required: 'Please fill locations name'
					},
					created: {
						type: Date,
						default: Date.now
					},
					user: {
						type: Schema.ObjectId,
						ref: 'User'
					}
					
				}
	],

	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Customer', CustomerSchema);