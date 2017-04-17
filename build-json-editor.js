﻿var concat = require('threax-npm-tk/concat');

compile(__dirname + "/bin", "node_modules/json-editor");

function compile(outDir, sourceDir) {
    if(!sourceDir){
        sourceDir = __dirname + "/../json-editor";
    }

    return concat([
        // License & version info, start the containing closure
        //sourceDir + '/src/intro.js',
        __dirname + "/open.js",

        // Simple inheritance
        sourceDir + '/src/class.js',
        // IE9 polyfills
        sourceDir + '/src/ie9.js',
        // Utils like extend, each, and trigger
        sourceDir + '/src/utilities.js',

        // The main JSONEditor class
        sourceDir + '/src/core.js',

        // JSON Schema validator
        sourceDir + '/src/validator.js',

        // All the editors
        sourceDir + '/src/editor.js',
        sourceDir + '/src/editors/null.js',
        sourceDir + '/src/editors/string.js',
        sourceDir + '/src/editors/number.js',
        sourceDir + '/src/editors/integer.js',
        sourceDir + '/src/editors/object.js',
        sourceDir + '/src/editors/array.js',
        sourceDir + '/src/editors/table.js',
        sourceDir + '/src/editors/multiple.js',
        sourceDir + '/src/editors/enum.js',
        sourceDir + '/src/editors/select.js',
        sourceDir + '/src/editors/selectize.js',
        sourceDir + '/src/editors/multiselect.js',
        sourceDir + '/src/editors/base64.js',
        sourceDir + '/src/editors/upload.js',
        sourceDir + '/src/editors/checkbox.js',
        sourceDir + '/src/editors/array/selectize.js',

        // All the themes and iconlibs
        sourceDir + '/src/theme.js',
        //sourceDir + '/src/themes/*.js',
        sourceDir + '/src/iconlib.js',
        //sourceDir + '/src/iconlibs/*.js',
        sourceDir + '/src/iconlibs/bootstrap3.js',

        // The JS templating engines
        sourceDir + '/src/templates/default.js',

        // Set the defaults
        sourceDir + '/src/defaults.js',

        // Wrapper for $.fn style initialization
        //sourceDir + '/src/jquery.js',

        //Custom stuff
        __dirname + "/themes/bootstrap3custom.js",

        // End the closure
        __dirname + "/close.js",
    ],
    outDir + "/json-editor.js");
};