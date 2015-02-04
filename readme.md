## Set Up Instructions

(If any commands fail, try either restarting your console or running them with `sudo`)

Make sure you're in the project directory first between executing these commands

Get [Composer](https://getcomposer.org/) (PHP dependency manager)

Install composer packages
    
    composer install

Get [NPM](http://nodejs.org/) (Node Package Manager)

Then install Bower Globally (Bower is another package manager...)

    npm install bower -g
Then install Gulp Globally (Gulp compiles sass, concat files, minifies, etc.)

    npm install gulp -g
    
Install Bower Components

    bower install
    
Then start gulp watch (watch the filesystem for file changes so it can recompile)

    gulp watch


