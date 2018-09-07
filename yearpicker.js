const version = '1.0.0';
const appName = 'YearPicker';


var defaults = {
    // Auto Hide
    autoHide: true,
    // The Initial Date
    date: null,
    // Start Date
    startDate: null,
    // End Date
    endDate: null,
    // A element tag items
    itemTag: 'li',
    //css class selected date item 
    selectedClass:  'selectedClass',
    // css class disabled
    disabledClass: ''


}

(function ($) {
    'use strict';

    var _setupError = 'YearPicker Error';
    if (typeof jQuery === 'undefined') {
        alert(`${appName} ${version} requires jQuery`);
        return;
    }


    $.fn.yearpicker = function (options) {
        var defaults = {
            minYear: "1900",
            maxYear: "",
        };

        var $settings = $.extend({}, defaults, options)

        var $currentYear = new Date().getFullYear();
        
        function yearpicker(yearpicker, settings){
            this.$yearpicker = yearpicker;
            this.$settings = settings;
            this.create();
        }

        // yearpicker
        yearpicker.prototype = {
            create: function() {
                log(this.$yearpicker);
                $(this.$yearpicker).val($currentYear);
            }
        }

        return this.each(function() {
            var data = $(this).data('yearpicker');
            log(data);
            if (!data) {
                data = new yearpicker(this, $settings);
                $(this).data('yearpicker001', data);
            }
        });
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

    
    $('.yearpicker-year .yearpicker-items').on('click', function () {
        var selectedDate = $(this).html();
        log($yearpicker);
        log(this.$yearpicker);
        $yearpicker.val(selectedDate);
    })


}(jQuery));

$('.yearpicker').yearpicker();