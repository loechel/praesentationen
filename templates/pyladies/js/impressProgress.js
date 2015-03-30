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
    var progressbar = document.querySelector('div.progressbar div');
    var progress = document.querySelector('div.progress');
    var cprogress = document.querySelector('div.progress');

    if (null !== progressbar || null !== progressbar) {
        document.addEventListener("impress:starttransition", function (event) {
            updateProgressbar(event.detail.next.id);
        });

        document.addEventListener("impress:stepenter", function (event) {
            updateProgressbar(event.target.id);
        });
    }

    function updateProgressbar(slideId) {
        var slideNumber = stepids.indexOf(slideId);
        if (null !== progressbar) {
            progressbar.style.width = (100 / (stepids.length - 1) * (slideNumber)).toFixed(2) + '%';
        }
        if (null !== progress) {
            progress.innerHTML = slideNumber + '<span class="pages"> /' + (stepids.length-1) + '</span>';
            cprogress.innerHTML = slideNumber + '<span class="pages"> /' + (stepids.length-1) + '</span>';
        }
    }
})(document, window);