var month = require('month');
var year = require('year');

module.exports = function (opts) {
	var currentMonth = opts.month || month('M');
	var currentYear = opts.year || year();

	if (currentMonth >= 8) return currentYear + '-' + (parseInt(currentYear) + 1);
	else if (currentMonth <= 5 ) return (parseInt(currentYear) - 1) + '-' + currentYear;
	else throw new Error('off season');
};