require.config({

    baseUrl: 'static/js',

    paths : {
        //
    },

    packages: [
        {
            location: 'vendor/jquery',
            name: 'jquery',
            main:'jquery'
        },
    ],

    map: {
        //
    },


    shim : {
        //
    },

    // introduced in requirejs 2.1.11, helps Backbone along.
    // http://jrburke.com/2014/02/16/requirejs-2.1.11-released/
    wrapShim: true,

});