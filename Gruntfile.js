module.exports = function(grunt) {
	pkg: grunt.file.readJSON('package.json'),
	grunt.initConfig({
		concat: {
			js: {
				src: 'js/*.js',
				dest: 'js/concat.js'
			},
			css: {
				src: 'css/*.css',
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
				src: 'css/concat.css',
				dest: 'css/compiled.css'
			}
		}
	});
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};