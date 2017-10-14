
        $(function () {
            $('.go-down').click(function () {
                $('html,body').animate({scrollTop: 960}, 500);
            });
        });
    /*
animation widget from here: https://github.com/silexlabs/Silex/issues/443
*/
$(function() {

    window.sr = ScrollReveal({
        distance: '100px'
    });
    sr.reveal('.from-left', { origin:  'left'});
    sr.reveal('.from-right', { origin:  'right'});
    sr.reveal('.from-top', { origin:  'top'});
    sr.reveal('.from-bottom', { origin:  'bottom'});

});
    