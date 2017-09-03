module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['*.html',
              '*.sass',
              '*.scss',
              '*.css',
              '*.js',
              '*min.css',
              '*.min.js'
      ],
      tasks: ['jshint']
    },
    jshint: {
      all: ['gruntfile.js',
        '*.js'
      ]
    },
    browserSync: {
      bsFiles: {
        src: [
          '*.css',
          '*.html'
        ]
      },
      options: {
        watchTask: true,
        server: './'
      }
    }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch']);
};
