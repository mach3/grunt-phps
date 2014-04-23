
# Grunt-PHPs

Run php build-in server on grunt.  
This requires PHP5.4+ installed.

## Usage

```javascript
grunt.initConfig({

    phps: {
        dev: {
            options: {
                base: "./public",
                hostname: "localhost",
                port: 8080,
                router: "./public/.htaccess.php",
                verbose: false,
                keepalive: true
            }
        }
    }
    
});
```

- **base** :String - Document root
- **hostname** :String - Hostanme
- **port** :Integer - Port number
- **router** :String - Router script path
- **verbose** :Boolean - Output log or not
- **keepalive** :Boolean - Keepalive

When you use this with **grunt-contrib-watch** or something async, keepalive should be FALSE
(as grunt-contrib-connect is so).

```javascript
grunt.initConfig({
    watch: {
        dev: { ... }
    },
    phps: {
        dev: {
            options: {
                ...
                keepalive: false
            }
        }
    }
});

grunt.registerTask("dev", ["phps:dev", "watch:dev"]);
```
