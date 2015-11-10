var season = require('./');
var test = require('tape');

test('current fpl season', function (t) {
	t.plan(6);
	t.equal(season({ month: 1, year: 2015 }), '2014-2015');
	t.equal(season({ month: 5, year: 2015 }), '2014-2015');
	t.equal(season({ month: 8, year: 2014 }), '2014-2015');
	t.equal(season({ month: 8, year: 2015 }), '2015-2016');
	t.equal(season({ month: 12, year: 2015 }), '2015-2016');
	t.equal(season({ month: 4, year: 2016 }), '2015-2016');
});