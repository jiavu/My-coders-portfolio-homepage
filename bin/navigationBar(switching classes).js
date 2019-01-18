
// NAVIGATION BAR MODES AND ANIMATIONS


jQuery(function($){

    const nav = $('nav:first');
    const main = $("main:first");
    let navHeight = parseFloat(nav.height());
    let previousStickyState;


    // Set navigation bar mode depending on screen size:
    function setNavbarMode() {
        checkIfStickyPos();
        $(window).width() < 600? 
            $("#navigation").removeClass("horizontal").addClass("vertical")
        :   $("#navigation").removeClass("vertical").addClass("horizontal");
    }
    

    // Animations:
    const elastic = Elastic.easeOut.config(2, 0.4);
    const elasticSoft = Elastic.easeOut.config(1, 0.75);
    const bounce = Bounce.easeOut;

    const tl_nav_hor = new TimelineMax()
        .pause()        // prevents from starting immediately. Starts with declaration?
        .add("start")
        .to("#nav-list", 0.1, { opacity: 0})
        .to("#navigation", 0.3, {
            scaleY: 0,
            ease: elasticSoft
        }, "start")
        /* .to("#navigation", 0.8, {
            rotationX: 270,
            ease: elasticSoft
        }, "start") */
        .to("#navigation", 0.3, {
            scaleX: 0,
            transformOrigin: "right"/* ,
            ease: bounce */
        }, "start")
        .call(function() {
            $("#navigation").toggleClass("horizontal").toggleClass("vertical");
            setNavbarMode();
        })
        .to("#menu-icon", 0.9, {
            rotationX: 0,
            scale: 1,
            ease: elastic
        });


    // Burger-menu-icon animation for hidden vertical nav menu:
    const tl_nav_vert = new TimelineMax()
        .pause()        // for some reason this timeline executes in declaration. Preventing play.
        .call(function() {
            $("#navigation").removeClass("horizontal").addClass("vertical")
        })
        .to("#menu-icon", 0.5, {
            rotationX: 90,
            ease: elastic
        })
        .to("#navigation", 0.2, {
            scale: 1,
            scaleY: .03,
            transformOrigin: "top right",
            ease: bounce
        })
        .to("#navigation", 0.3, {
            scaleY: 1
        })
        .to("#nav-list", 0.3, { opacity: 1 }, "-=0.3")
        ;
    

    /* Sticky-change (custom) EVENT LISTENER (requires sticky-change-event.js)
    I won't use it anymore because the required layout causes issues.
    There has to be a fixed parent that doesn't move when scrolling the page
    so the sentinel would intersect with it.
    document.addEventListener('sticky-change', e => {
        const observedElement = e.detail.target;
        const sticking = e.detail.stuck; // true when observed element is sticky.
        console.log("sticking: " + sticking);
        sticking? tl_nav_hor.play() : tl_nav_hor.reverse();
    });
    */


    // Scroll event listener for nav element to detect sticky change:

    function checkIfStickyPos() {

        let navPos = parseFloat(nav.offset().top);
        let mainPos = parseFloat(main.offset().top);

        let sticking = (navPos + navHeight >= mainPos)? true : false;

        if (sticking !== previousStickyState) {
            previousStickyState = sticking;
            if ($(window).width() >= 600)
                sticking? tl_nav_hor.play() : tl_nav_hor.reverse();
        }
    }

    // Event listeners:
    setNavbarMode();

    window.onscroll = checkIfStickyPos;
    $(window).resize(setNavbarMode);
    $("#menu-icon").click(function(){ tl_nav_vert.restart(); });

});