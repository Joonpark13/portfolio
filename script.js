$(function() {
    // Smooth scrolling to anchor
    // Adapted from https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
    $('a').click(function() {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function() {
            window.location.hash = hash;
        });
    });
});