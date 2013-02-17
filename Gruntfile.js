module.exports = function(grunt) {
	pkg: grunt.file.readJSON('package.json'),
	grunt.initConfig({
		concat: {
			js: {
				src: ['js/jquery.min.js', 'js/bootstrap.min.js', 'js/signals.min.js', 'js/crossroads.min.js', 'js/jquery.history.min.js', 'js/script.js'],
				dest: 'js/concat.js'
			},
			css: {
				src: ['css/bootstrap.min.css', 'css/font-awesome.min.css', 'css/bootstrap-responsive.min.css', 'css/style.css', 'css/docs.css', 'css/scrollbar.css'],
				dest: 'css/concat.css'
			}
		},
		uglify: {
			js: {
				src: 'js/concat.js',
				dest: 'js/compiled.js'
			}
		},
		cssmin: {
			css: {
				options: {
						keepSpecialComments: 0
					},
				src: 'css/concat.css',
				dest: 'css/compiled.css'
			}
		},
		htmlrefs: {
			html: {
				src: 'index.html',
				dest: 'compiled'
			}
		},
		htmlcompressor: {
			compile: {
				files: {
				'compiled/index.html': 'compiled/index.html'
				},
				options: {
					type: 'html'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-htmlrefs');
	grunt.loadNpmTasks('grunt-htmlcompressor');
	grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'htmlrefs', 'htmlcompressor']);
};
