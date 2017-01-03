module.exports = function(grunt) {
    
    grunt.initConfig({
        less: {
            options: {
                compress: true
            },
            all: {
                files: {
                    'css/style.css': 'less/style.less'
                }
            }
        },
        watch: {
            files: ['less/**/*.less'],
            tasks: ['less']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
        'watch'
    ]);
    
};
