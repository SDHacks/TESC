var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
    'bootstrap': './vendor/bower_components/bootstrap-sass/assets/',
    'jquery': './vendor/bower_components/jquery/'
};

elixir(function(mix) {
    //Compile style.scss into css folder
    mix.sass("style.scss", 'public/css/',
        {
            includePaths: [
                paths.bootstrap + 'stylesheets/'
            ]
        })
        //Copy Bootstrap Fonts to Font File
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts')
        //Concat Scripts
        .scripts([
            paths.jquery + "dist/jquery.js",
            paths.bootstrap + "javascripts/bootstrap.js",
            './resources/**/*.js'
        ], 'public/js/app.js', './');
});
