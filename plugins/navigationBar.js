
// NAVIGATION BAR MODES AND ANIMATIONS


jQuery(function($){

    /* Works again ^^
    if ( navigator.vendor.toLowerCase().includes("apple") )
        $("#Safari-issue").show();
    */

    const nav = $('nav:first');
    const main = $("main:first");
    let navHeight = parseFloat(nav.height());
    let previousStickyState;
    let smallScreen;


    
    // Set navigation bar mode depending on screen size:
    function setNavbarMode() {
        smallScreen = $(window).width() < 600 ? true : false;
        previousStickyState = undefined;
        checkIfStickyPos();
    }
    

    // Animations:
    const elastic = Elastic.easeOut.config(2, 0.4);
    const elasticSoft = Elastic.easeOut.config(1, 0.75);
    const bounce = Bounce.easeOut;

    const tl_nav_hor = new TimelineMax()
        .pause()        // prevents from starting immediately. Starts with declaration?
        .add("start")
        .set("#menu-icon", {
            scale: 0,
            rotationX: 0
        })
        .to("#ul-hor", 0.1, { opacity: 0})
        .to("#horizontal-nav", 0.3, {
            scaleY: 0,
            ease: elasticSoft
        }, "start")
        /* .to("#horizontal-nav", 0.8, {
            rotationX: 270,
            ease: elasticSoft
        }, "start") */
        .to("#horizontal-nav", 0.3, {
            scaleX: 0,
            transformOrigin: "right"/* ,
            ease: bounce */
        }, "start")
        .to("#menu-icon", 0.9, {
            rotationX: 0,
            scale: 1,
            ease: elastic
        })


    // Burger-menu-icon animation for opening the hidden vertical nav menu:
    const tl_nav_vert = new TimelineMax()
        .pause()        // for some reason this timeline executes in declaration. Preventing play.
        .to("#menu-icon", 0.5, {
            rotationX: 90,
            ease: elastic
        })
        .to("#vertical-nav", 0.2, {
            scale: 1,
            scaleY: .03,
            transformOrigin: "top right",
            ease: bounce
        })
        .to("#vertical-nav", 0.3, {
            scaleY: 1
        })
        .to("#ul-vert", 0.3, { opacity: 1 }, "-=0.3")
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

        let sticking = (navPos /* + navHeight */ >= mainPos)? true : false;
        // or maybe use window.getComputedStyle(nav).position

        if (sticking !== previousStickyState) {
            previousStickyState = sticking;
            if (sticking) {
                tl_nav_vert.reverse();
                tl_nav_hor.play();
            } else {
                tl_nav_vert.reverse();
                smallScreen?
                    tl_nav_hor.play() : tl_nav_hor.reverse();
            }
                
        }
    }

    // Event listeners:
    setNavbarMode();

    window.onscroll = checkIfStickyPos;
    $(window).resize(setNavbarMode);
    $("#menu-icon").click(function(){ tl_nav_vert.restart(); });
    $("#vertical-nav .nav-link").click(function(){
            tl_nav_vert.reverse();
    });
    

});