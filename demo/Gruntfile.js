
module.exports = function(grunt){

    grunt.initConfig({
        phps: {
            dev: {
                options: {
                    keepalive: false,
                    hostname: "localhost",
                    port: 8080,
                    base: "./public",
                    router: "./public/.htaccess.php",
                    verbose: true
                }
            }
        },

        watch: {
            dev: {
                files: ["Gruntfile.js"],
                tasks: []
            }
        }
    });

    grunt.registerTask("default", ["phps:dev", "watch:dev"]);
    grunt.loadTasks("../tasks");
    grunt.loadTasks("../node_modules/grunt-contrib-watch/tasks");

};