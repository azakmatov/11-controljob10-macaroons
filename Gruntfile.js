module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'css/style.css': 'src/styles/*.less'
                }
            },
            production: {
                options: {
                    paths: ['assets/css'],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                        new (require('less-plugin-clean-css'))()
                        // new (require('less-plugin-clean-css'))(cleanCssOptions)
                    ],
                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    'css/style.css': 'src/styles/*.less'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    // 'output.css': ['foo.css', 'bar.css']
                    'css/style.min.css': ['css/style.css']
                }
            }
        },
        clean: ['css/style.css', 'css/style.css.map'],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/styles/*.less'],
                tasks: ['less', 'cssmin', 'clean'], //можно указать tasks: ['default'] если активирован default ниже.
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.registerTask('default', ['less', 'cssmin', 'clean']);
};
