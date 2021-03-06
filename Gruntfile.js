module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      dist: {
        files: {
          './dist/public/application/css/app.css': [ 
            'src/sass/main.scss',
            'src/sass/themes.scss', 
            'src/sass/header.scss',
            'src/sass/main-content.scss',
            'src/sass/slider-and-video-sections.scss',
            'src/sass/media-query.scss'
          ]
        }
      }
    },
    clean: {
      all: {
        src: ['./dist/public/application']
      },
      css: {
        src: ['./dist/public/application/css']
      },
      scripts: {
        src: ['./dist/public/application/js']
      },
      html: {
        src: ['./dist/public/application/**/*.html']
      },
      img: {
        src: ['./dist/public/img']
      }
    },
    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: './src',
            src: ['**/*.html'],
            dest: './dist/public/application/'
          }
        ]
      },
      img: {
        files: [
          {
            expand: true,
            cwd: './src',
            src: ['**/*.jpg', '**/*.png'],
            dest: './dist/public/application/'
          }
        ]
      },
      json: {
        files: [
          {
            expand: true,
            cwd: './src',
            src: ['json'],
            dest: './dist/public/application'
          }
        ]
      },
      fonts: {
        files: [
          {
            expand: true,
            cwd: './src',
            src: ['**/*'],
            dest: './dist/public/application/'
          }
        ]
      }
    },
    browserify: {
      dist: {
        files: {'./dist/public/application/js/index.js': './src/**/main.js'}
      }
    },
    watch: {
      sass: {
        files: ['./src/**/*.scss'],
        tasks: ['clean:css', 'sass']
      },
      scripts: {
        files: ['./src/**/*.js'],
        tasks: ['clean:scripts', 'browserify']
      },
      html: {
        files: ['./src/**/*.html'],
        tasks: ['clean:html', 'copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['clean:all', 'sass', 'copy', 'browserify']);
};
