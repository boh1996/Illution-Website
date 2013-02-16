module.exports = function(grunt) {
	pkg: grunt.file.readJSON('package.json'),
	grunt.initConfig({
		uglify: {
			js: {
				src: 'js/script.js',
				dest: 'js/script.min.js'
			}
		},
		concat: {
			js: {
				src: ['js/jquery.min.js', 'js/bootstrap.min.js', 'js/signals.min.js', 'js/crossroads.min.js', 'js/jquery.history.min.js', 'js/script.min.js'],
				dest: 'js/compiled.js'
			},
			css: {
				src: 'css/*.css',
				dest: 'css/concat.css'
			}
		},
		cssmin: {
			css: {
				src: 'css/concat.css',
				dest: 'css/compiled.css'
			}
		},
		htmlrefs: {
			html: {
				src: 'index.html',
				dest: 'compiled'
			}
		}
	});
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-htmlrefs');
	grunt.registerTask('default', ['uglify', 'concat', 'cssmin', 'htmlrefs']);
};
