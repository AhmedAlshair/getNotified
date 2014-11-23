/// getNotified v1.0.1 ///
/// A simple lightweight jQuery plugin to view notifications in your web pages //
/// https://github.com/AhmedAlShair/getNotified  ///


//-------------------------------------------------------------------------------

(function ($) { // Code Start

    $.fn.getNotified = function (options) {

        // Setting the default values for plugins options object
        var defaults = {
            // Animation Speed
            velocity: 500,
            // Notification position
            position: "top",
            // Notification h1 Title
            title: "Sample Title",
            // Notification h2 Title
            subtitle: "Sample Subtitle",
            // Notification Type: "success" or "warning"
            type: "success",
            // Selecting Notification Div by Class Name
            boxClass: ".getNotifiedBox",
            // Delay Before Closing the Box
            delay: 3200
        }

        // Extending user-options to the Defaults object (with merging "true")
        $.extend(true, defaults, options);

        // Delay (setTimeOut function) variable definition in global scope
        var closeBox;


        // /// The main Plugin Function /// //

        var doNotify = function (e) {

                // Inject Text Content
                $(defaults.boxClass).html("<h1>" + defaults.title + "</h1>" + "<h2>" + defaults.subtitle + "</h2>");

                // Define Notification Box Height
                var notify7BoxHeight = $(defaults.boxClass).outerHeight();

                // Change Box Color according to "Type" option
                $(defaults.boxClass).addClass(defaults.type).css(defaults.position, notify7BoxHeight * -1);


                $(defaults.boxClass).show();


                // Animate the Box In
                if (defaults.position == "bottom") {
                    $(defaults.boxClass).animate({
                        bottom: 0
                    }, defaults.velocity);
                } else {
                    $(defaults.boxClass).animate({
                        top: 0
                    }, defaults.velocity);
                }


                // Animation the box Out - Function Definition
                function animateOut() {
                    if (defaults.position == "bottom") {
                        $(defaults.boxClass).animate({
                            bottom: notify7BoxHeight * -1
                        }, defaults.velocity);
                    } else {
                        $(defaults.boxClass).animate({
                            top: notify7BoxHeight * -1
                        }, defaults.velocity);
                    }
                }

                // TimeOut (Delay) for Closing the Box - Function Definition
                closeBox = setTimeout(function () {
                    animateOut();
                }, defaults.delay);

                // Closing the Box onClick
                $(defaults.boxClass).click(function () {
                    animateOut();
                });

            } // DoNotify Function End ///




        // Assign doNotify function to the Target Element //
        this.on("click", function (e) {
            if ($(defaults.boxClass).is(":hidden")) {
                // Resetting Styles
                $(this).removeAttr("style").removeClass("success, warning");
                // getNotified Execution
                doNotify();
            } else {
                $(defaults.boxClass).fadeOut(function () {
                    window.clearTimeout(closeBox);
                    // Resetting Styles
                    $(this).removeAttr("style").removeClass("success, warning");
                    // getNotified Execution
                    doNotify();
                });
            }
        });


    }
})(jQuery); // Code End