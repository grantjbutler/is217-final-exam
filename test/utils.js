var mocha = require('mocha'),
	chai = require('chai'),
	expect = chai.expect,
	utils = require('../app/lib/utils');

describe('utils', function() {
	describe('#calculateCost', function() {
		it('should calculate the cost of a laptop with components', function() {
			var laptop = {
				basePrice: 1000
			};
			
			var componentOptions = [
				{
					price: 200
				},
				{
					price: 0
				},
				{
					price: 200
				}
			];
			
			expect(utils.calculateCost(laptop, componentOptions)).to.equal(1400);
			
			laptop.basePrice = 2000;
			componentOptions[0].price = 300;
			componentOptions[1].price = -100;
			
			expect(utils.calculateCost(laptop, componentOptions)).to.equal(2400);
		});
	});
});