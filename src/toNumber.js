var toNumber = function(money) {
	return money.replace(/[^\d]*/g, '') / 100;
};

module.exports = toNumber;