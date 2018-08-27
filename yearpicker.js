(function ($) {
    'use strict';

    // var _setupError = 'YearPicker Error';
    // if (!($) || !($.moment)) {
    //     alert('The jQuery and moment.js plugin must be loaded!!');
    //     return;
    // }

    $.fn.yearpicker = function (options) {
        var defaults = {
            minDate: "1900",
            maxDate: "",
            date: "",
        };
        var $settings = $.extend({}, defaults, options)

        var $currentYear = new Date().getFullYear();
        var $yearpicker = $(this);

        debug($yearpicker);
        log($yearpicker);
        log($currentYear);
        $yearpicker.val($currentYear);

        $('.yearpicker-year .yearpicker-items').on('click', function () {
            var selectedDate = $(this).html();
            $yearpicker.val(selectedDate);
        })
    }
    var debug = (obj) => {
        if (window.console && window.console.log) {
            window.console.log("yearpicker counts " + obj.length);
        }
    }

    var log = (obj) => {
        if (window.console && window.console.log) {
            window.console.log(obj);
        }
    }



}(jQuery));

$('.yearpicker').yearpicker();