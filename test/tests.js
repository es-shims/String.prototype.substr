'use strict';

module.exports = function (substr, t) {
	t.equal(substr('0b', -1), 'b', 'negative index works');

	t.test('both arguments', function (st) {
		st.equal(substr('abc', 0, 1), 'a', '0, 1 works');
		st.equal(substr('abc', 0, 2), 'ab', '0, 2 works');
		st.equal(substr('abc', 0, 3), 'abc', '0, 3 works');
		st.equal(substr('abc', 0, 4), 'abc', '0, 4 works');

		st.equal(substr('abc', 1, 1), 'b', '1, 1 works');
		st.equal(substr('abc', 1, 2), 'bc', '1, 2 works');
		st.equal(substr('abc', 1, 3), 'bc', '1, 3 works');
		st.equal(substr('abc', 1, 4), 'bc', '1, 4 works');

		st.equal(substr('abc', 2, 1), 'c', '2, 1 works');
		st.equal(substr('abc', 2, 2), 'c', '2, 2 works');
		st.equal(substr('abc', 2, 3), 'c', '2, 3 works');
		st.equal(substr('abc', 2, 4), 'c', '2, 4 works');

		st.equal(substr('abc', 3, 1), '', '3, 1 works');
		st.equal(substr('abc', 3, 2), '', '3, 2 works');
		st.equal(substr('abc', 3, 3), '', '3, 3 works');
		st.equal(substr('abc', 3, 4), '', '3, 4 works');

		st.end();
	});

	t.test('first argument', function (st) {
		st.equal(substr('abc', 1), 'bc', '1, works');
		st.equal(substr('abc', 1), 'bc', '1, works');
		st.equal(substr('abc', 1), 'bc', '1, works');
		st.equal(substr('abc', 1), 'bc', '1, works');

		st.equal(substr('abc', 2), 'c', '2, works');
		st.equal(substr('abc', 2), 'c', '2, works');
		st.equal(substr('abc', 2), 'c', '2, works');
		st.equal(substr('abc', 2), 'c', '2, works');

		st.equal(substr('abc', 3), '', '3, works');
		st.equal(substr('abc', 3), '', '3, works');
		st.equal(substr('abc', 3), '', '3, works');
		st.equal(substr('abc', 3), '', '3, works');

		st.end();
	});
};
