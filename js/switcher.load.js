/*
 * Smart Demo Switcher v1.5
 * http://www.smartplugins.info/plugin/javascript/smart-demo-switcher//
 * 
 * Copyright 2008 - 2014 Milan Petrovic (email: milan@gdragon.info)
 *
 * http://www.dev4press.com
 * http://www.millan.rs
 *
 */

var smartDemoSwitcherObj;

;(function ($, window, document, undefined) {
    smartDemoSwitcher.Loader = smartDemoSwitcher.Load.extend({
        display: {
            style: "light",
            location: "left",
            buttonContent: '<i class="fa fa-gear"></i>',
            formHeaderContent: '<h5>ZAKAT</h5>'
        },
        stylesheets: {
            main: {
                columns: 2,
                boxFactor: .5,
                title: true,
                titleContent: "<h5>Styles</h5>",
                selector: "#main-style",
                default: 'css/color/yellow.css',
                list: [
                    {file: 'css/color/yellow.css', name: 'yellow', colors: ['#fac42b']},
                    {file: 'css/color/blue.css', name: 'Blue', colors: ['#23d9cf']},
                    {file: 'css/color/red.css', name: 'Red', colors: ['#fa3a2b']},
                    {file: 'css/color/green.css', name: 'Green', colors: ['#61fa2b']},

					
                ]
            }
        },
    });

    $(document).ready(function() {
        smartDemoSwitcherObj = new smartDemoSwitcher.Core();
    });
})(jQuery, window, document);
