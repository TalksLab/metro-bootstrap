// Generated on 2014-06-03 using generator-bootstrap-less 3.2.0
'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    docs: 'docs'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      less: {
        files: ['<%= yeoman.app %>/less/{,*/}*.less'],
        tasks: ['less']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '{.tmp,<%= yeoman.app %>}/less/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.options.port %>/index.html']
        }
      }
    },
    less: {
      dist: {
        files: {
          'dist/css/<%= pkg.name %>.css': ['<%= yeoman.app %>/less/<%= pkg.name %>.less']
        },
        options: {
          sourceMap: true,
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map',
          sourceMapRootpath: '/'
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dist: {}
    },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/less/{,*/}*.css',
            '<%= yeoman.dist %>/fonts/{,*/}*.*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/less/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*'
      },
      dist: {
        files: {
            'dist/css/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css'
          
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      bootstrapless:
      {
        files: [{
          expand: true,
          dot: true,
          
          cwd: '<%= yeoman.app %>/bower_components/bootstrap/less',
          dest: '<%= yeoman.app %>/bootstrap',
          src: [
            '**/*'
          ]
        }]
      },
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            'fonts/{,*/}*.*',
            '.htaccess',
            'images/{,*/}*.{webp,gif}'
          ]
        }]
      },
      server: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/font-awesome/fonts/',
          dest: '<%= yeoman.app %>/fonts/font-awesome',
          src: ['*']
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/bootstrap/fonts/',
          dest: '<%= yeoman.app %>/fonts/glyphicons',
          src: ['*']
        }]
      },
      docs: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.dist %>',
          dest: '<%= yeoman.docs %>/<%= yeoman.dist %>',
          src: '**/*'
        },
        {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/bootstrap/dist/js/',
          dest: '<%= yeoman.docs %>/scripts/vendor/',
          src: '{,*/}*.js'
        },
        {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/font-awesome/css/',
          dest: '<%= yeoman.docs %>/styles/',
          src: '{,*/}*.css'
        },
        {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.dist %>/fonts/font-awesome/',
          dest: '<%= yeoman.docs %>/fonts/',
          src: '**/*'
        }
        ]
      }
    },
    concurrent: {
      dist: [
        'less',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'less',
      'copy:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('nuget', 'Create a nuget package', function() {
    var done = this.async();
    //invoke nuget.exe
    grunt.util.spawn({
        cmd: "nuget.exe",
        args: [
            
            "pack",
            "metro-bootstrap.nuspec",
 
            //path where the package should be created
            "-OutputDirectory",
            "nuget",
 
            //override the version using the version in package.json
            "-Version",
            grunt.config.get("pkg").version
        ]
    }, function (error, result) {
        if (error) {
            grunt.log.error(error);
        } else {
            grunt.log.write(result);
        }
        done();
    });
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'copy:bootstrapless',
    'copy:server',
    'useminPrepare',
    'concurrent',
    'cssmin',
    'copy',
    'rev',
    'usemin'
  ]);

};
