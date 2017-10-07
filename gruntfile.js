module.exports = function(grunt){
	grunt.initConfig({
		//configure tasks here
		copy: {
			release: {
				src: ['*.html','*.pdf'],
				dest: 'release/'
			},
			css: {
				src: 'css/*.css',
				dest: 'release/'
			},
			images: {
				src: 'images/*.*',
				dest: 'release/'
			},
			js: {
				src: 'js/*.js',
				dest: 'release/'
			}
		},
		jshint: {
			files: ["js/*.js"]
		},
		jsdoc: {
			dist: {
				src: ['js/*.js'],
				dest: 'doc'
			}
		},
		jasmine: {
			test: {
				src: ['js/*.js'],
				options: {
					specs: 'test/*.js'
				}
			}
		}
	});
	
	//load plugins here
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	
	//register tasks here
	grunt.registerTask('default', ['jshint', 'copy']);
};