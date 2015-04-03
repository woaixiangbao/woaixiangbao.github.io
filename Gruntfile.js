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

        compass: {
            dist: {
                options: {
                    config: 'config/config.rb',  // css_dir = 'dev/css'
                    sassDir:'<%= config.app %>sass',
                    cssDir: '<%= config.dist %>css'
                }
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>sass',
                    src: ['*.{scss,sass}'],
                    dest: '<%= config.dist %>css',
                    ext: '.css'
                }]
            }
        },
        copy:{
            dist: {
                src:'<%= config.app %>',
                dest:'<%= config.dist %>'
            }
        },
        clean:{
            dist: {
                src:'<%= config.dist %>css/*.min.css'
            }
        },
        cssmin:{
            minify:{
                expand:true,
                cwd: '<%= config.dist %>css',
                src:['*.css","!*.min.css'],
                dest:'<%= config.dist %>css',
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