const phtmlSelfClosing = require('@phtml/self-closing');

module.exports = function (grunt) {
	// project configuration
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// before generating any new files, remove any previously-created files
		clean: {
			tests: ['tmp']
		},

		// configuration to be run (and then tested)
		phtml: {
			default_options: {
				options: {},
				files: {
					'test/result/default_options.html': [
						'test/source/basic-1.html',
						'test/source/basic-2.html'
					]
				}
			},
			custom_options: {
				options: {
					separator: ''
				},
				files: {
					'test/result/custom_options.html': [
						'test/source/basic-1.html',
						'test/source/basic-2.html'
					]
				}
			},
			custom_plugins: {
				options: {
					plugins: phtmlSelfClosing()
				},
				files: {
					'test/result/custom_plugins.html': [
						'test/source/basic-1.html',
						'test/source/basic-2.html'
					]
				}
			}
		},

		// unit tests
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	// actually load this plugin's task(s)
	grunt.loadTasks('tasks');

	// these plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result
	grunt.registerTask('test', ['clean', 'phtml', 'nodeunit']);

	// by default, lint and run all tests
	grunt.registerTask('default', ['jshint', 'test']);

};
