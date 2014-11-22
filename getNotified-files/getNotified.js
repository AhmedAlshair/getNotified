(function ($) {

    $.fn.getNotified = function (options) {

        // Setting the default values for plugins options
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
        $.extend(defaults, options);
        
        // Delay setTimeOut function variable definition
        var closeBox;
        
        
        // // The main Plugin Function // //

        var doNotify = function (e) { // What will be excuted
                        
            // Inject Text Content
            $(defaults.boxClass).html("<h1>" + defaults.title + "</h1>" + "<h2>" + defaults.subtitle + "</h2>");

            // Define Notification Box Height
            var notify7BoxHeight = $(defaults.boxClass).outerHeight();

            // Change Box Color according to Type
            $(defaults.boxClass).addClass(defaults.type).css(defaults.position, notify7BoxHeight * -1);

            $(defaults.boxClass).show();
            // Animate the Box
            if (defaults.position == "bottom") {
                $(defaults.boxClass).animate({
                    bottom: 0
                }, defaults.velocity);
            } else {
                $(defaults.boxClass).animate({
                    top: 0
                }, defaults.velocity);
            }
            
            
            // Animation Out Function Definition
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
            
            // TimeOut for Closing the Box - Function Definition
            closeBox = setTimeout(function () {
                    animateOut();
                }, defaults.delay);
            
            // Closing the Box onClick
            $(defaults.boxClass).click(function(){
                animateOut();
            });
                        
        }  // DoNotify Function End
        
        


        // Assign doNotify function to the Target Element
        this.on("click", function (e) {
            if ($(defaults.boxClass).is(":hidden")) {
                $(this).removeAttr("style").removeClass("success, warning");
                doNotify();
            } else {
                $(defaults.boxClass).fadeOut(function () {
                    window.clearTimeout(closeBox);
                    $(this).removeAttr("style").removeClass("success, warning");
                    doNotify();
                 });
            }
        });


    }
})(jQuery);





//
//function Notify7(options) {
//
//// Animation Speed
//    this.velocity = options.velocity;
//
//    // Notification position
//    this.position = options.position;
//
//    // Notification h1 Title
//    this.title = options.title;
//
//    // Notification h2 Title
//    this.subtitle = options.subtitle;
//
//    // Notification Type: "success" or "warning"
//    this.type = options.type;
//
//    // Selecting Notification Div by Class Name
//    this.boxClass = options.boxClass;
//  
//
//   var doNotify = function(e) {
//          console.log(notify7Position);
//
//        notify7Box.html("<h1>" + notifyTitle + "</h1>" + "<h2>" + notifySubtitle + "</h2>");
//        var notify7BoxHeight = notify7Box.height();
//        console.log(notify7BoxHeight);
//
//        notify7Box.addClass(notify7Type).css(notify7Position, "-" + notify7BoxHeight * 2);
//
//        if (notify7Position == "bottom") {
//            $(".notify7Box").show().animate({
//                bottom: 0
//            }, velocity);
//        } else {
//            $(".notify7Box").show().animate({
//                top: 0
//            }, velocity);
//        }
//
//   }
//   
//   
//    this.start = function() {
//        // Assign Notify function to the Class "notify7"
//        $(".notify7").on("click", function () {
//            doNotify(e);
//        });
//    }
//
//}