/**
 * Grunt Task : phps
 * -----------------
 * Run php built-in server
 */
module.exports = function(grunt) {
 
    grunt.registerMultiTask("phps", "Run php built-in server", function() {
        var options, params, php;

        options = this.options({
            command: "php",
            port: 8080,
            hostname: "localhost",
            base: ".",
            keepalive: false,
            router: null,
            verbose: false
        });

        params = [
            "-S",
            options.hostname + ":" + options.port,
            "-t",
            options.base
        ];

        if(options.router){
            params.push(options.router);
        }

        php = require("child_process").spawn(options.command, params);

        if(options.verbose){
            php.stderr.setEncoding("utf8");
            php.stderr.on("data", function(data){
                grunt.log.write(data);
            });
        }

        if(options.keepalive){
            this.async();
        }
    });
};