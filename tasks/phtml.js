const phtml = require('phtml');

module.exports = grunt => {
	// please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('phtml', 'Process HTML files', async function () {
		const done = this.async();

		// merge task-specific and/or target-specific options with these defaults
		const options = this.options({
			plugins: [],
			processOptions: {},
			separator: '\n'
		});

		// iterate over all specified file groups
		await Promise.all(
			this.files.map(
				async file => {
					// process each file using phtml
					const results = await Promise.all(
						file.src.filter(
							// concatenate specified files
							filepath => !grunt.file.exists(filepath)
								? grunt.log.warn(`Source file "${filepath}" not found.`) && false
							: true
						).map(
							// process the file source
							from => console.log({ from, src: grunt.file.read(from) }) || phtml.process(
								grunt.file.read(from),
								{
									...options.processOptions,
									from
								},
								options.plugins
							)
						)
					);

					// concatenate the results
					const html = results.map(
						result => result.html
					).join(
						grunt.util.normalizelf(options.separator)
					);

					// write the destination file
					grunt.file.write(file.dest, html);

					// print a success message
					grunt.log.writeln(`File "${file.dest}" created.`);
				}
			)
		).then(done);
	});
};
