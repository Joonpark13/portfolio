$(function() {
    // Smooth scrolling to anchor
    // Adapted from https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
    $('a').click(function() {
        if (!$(this).hasClass('external')) {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
                window.location.hash = hash;
            });
        }
    });

    // Disabling hover on touch devices
    // Adapted from http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
    let isTouch = false;
    let isTouchTimer;
    let currentClass = ''; // 'can-touch' or ''

    function addTouchClass() {
        clearTimeout(isTouchTimer);
        isTouch = true;
        if (currentClass !== 'can-touch') {
            currentClass = 'can-touch';
            $(document.documentElement).addClass('can-touch');
        }
        // Delay setting of isTouch to false so removetouchclass isn't immediately fired
        isTouchTimer = setTimeout(function() {isTouch = false;}, 500);
    }

    function removeTouchClass() {
        if (!isTouch && currentClass == 'can-touch') {
            isTouch = false;
            currentClass = '';
            $(document.documentElement).removeClass('can-touch');
        }
    }

    document.addEventListener('touchstart', addTouchClass, false);
    document.addEventListener('mouseover', removeTouchClass, false);

    // Highlight nav
    // Adapated from http://codepen.io/clokey2k/pen/jgfFD?editors=0010
    const pages = $('.page');

    $(window).scroll(function() { // On user scroll
        var currentScroll = $(this).scrollTop(); // Get the position of the user's current view
        let currentPage;

        pages.each(function() {
            const pagePosition = $(this).offset().top;
            // Find the current page
            if (pagePosition - 1 < currentScroll) currentPage = $(this);
        });

        const id = currentPage.attr('id');
        $('a').removeClass('nav-active');
        $(`a.nav-links[href='#${id}']`).addClass('nav-active');
    });
});