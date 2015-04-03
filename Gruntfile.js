'use strict';

module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        app : 'app/',
        dist : 'dist/'
    };
    grunt.initConfig({

        config:config,

        copy:{
            dist: {
                src:'<%= config.dist %>',
                dest:'<%= config.app %>'
            }
        },
        clean:{
            dist: {
                src:'<%= config.dist %>c/style/*.min.css'
            }
        },
        cssmin:{
            minify:{
                expand:true,
                cwd: '<%= config.app %>c/style/',
                src:['*.css","!*.min.css'],
                dest:'<%= config.dist %>c/style/',
                ext:'.min.css'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>j/js/public.js',
                '!<%= config.app %>j/js/plugin/*'
            ],
            tt:'<%= config.app %>j/js/address.js'
        },
        uglify: {
            dist: {
                files: {
                    '<%= config.app %>j/js/test.min.js': [
                        '<%= config.app %>j/js/test.js'
                    ]
                }
            },
            all: {
                expand: true,
                cwd:'<%= config.app %>j/js/',
                src:['{,*/}*.js','!{,*/}*min.js'],
                dest:'<%= config.app %>test',
                ext:'.min.js'
            }
        }
    });

    grunt.registerTask('default',['cssmin:minify']);

};