(function ( document, window ) {
    'use strict';
    
    var stepids = [];
    // wait for impress.js to be initialized
    document.addEventListener("impress:init", function (event) {
        var steps = event.detail.steps;
        for (var i = 0; i < steps.length; i++)
        {
          stepids[i+1] = steps[i].id;
        }
    });

    document.addEventListener("impress:stepenter", function (event) {
        initChartOnSlide(event.target.id);
    });


    function initChartOnSlide(slideId) {
        var slideNumber = stepids.indexOf(slideId);
        try {
            window[slideId]();
        }
        catch(err) {
            // No function avaliable, do nothing
        }
    }
})(document, window);