const grunt = require('grunt');

exports.phtml = {
	setUp: done => {
		// setup here if necessary
		done();
	},
	default_options: test => {
		test.expect(1);

		const actual = grunt.file.read('test/result/default_options.html');
		const expect = grunt.file.read('test/expect/default_options.html');

		test.equal(actual, expect, 'should describe what the default behavior is.');

		test.done();
	},
	custom_options: test => {
		test.expect(1);

		const actual = grunt.file.read('test/result/custom_options.html');
		const expect = grunt.file.read('test/expect/custom_options.html');

		test.equal(actual, expect, 'should describe what the custom option(s) behavior is.');

		test.done();
	},
	custom_plugins: test => {
		test.expect(1);

		const actual = grunt.file.read('test/result/custom_plugins.html');
		const expect = grunt.file.read('test/expect/custom_plugins.html');

		test.equal(actual, expect, 'should describe what the custom option(s) behavior is.');

		test.done();
	}
};
