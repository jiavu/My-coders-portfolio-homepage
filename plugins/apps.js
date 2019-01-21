
// MY APPS/PLUGINS //


// Angular.js apps, animation stuff //

angular.module("myData", [])
    .controller("displayData", function($scope, $sce) {
        let ctrl = this; // can't call from scope. Why?
        $scope.projects = data.projects;
        $scope.devTools = data.devTools;

        $scope.checkForIcon = function(data) {
            return $scope.validateHTML(data.preview_icon?
                `<img src=${data.preview_icon} alt="icon">`
                : `<div>${data.short_title}</div>`);
        };

        $scope.validateHTML = function(snippet) {
            return $sce.trustAsHtml(snippet);
        }
    });

angular.module("contactForm", [])
    .controller("contactFormControl", function($scope) {
        // do I need the controller?
        // validations are in .html
    })


/*===========================================================================*/

jQuery(function($){

    // SET <> TAGS AROUND ALL HEADINGS

    $(".heading")
    .before("<span class='html-tag'>&lt;&nbsp;</span>")
    .after("<span class='html-tag'>&nbsp;&gt;</span>");  
    $(".closing")
    .before("<span class='html-tag'>&lt;/</span>")
    .after("<span class='html-tag'>&gt;</span>");

/*===========================================================================*/
    
    // MOUSE OVER TAGS -> LET 'EM ROTATE :D

    $(".tag").mouseover(function() {
        TweenMax.to(this, 0.5, {
            rotationY: 360,
            onComplete: ()=> {
                TweenMax.set(this, { rotationY: 0 });
            }
        });
    });

/*===========================================================================*/

    // ROTATE UNDER CONSTRUCTION WINDOW
    let underCboxFront = true;
    $("#underConstruction").click(function(){
        underCboxFront = !underCboxFront;
        underCboxFront?
            $(".flip-box").css("transform", "rotateY(0deg)")
        :   $(".flip-box").css("transform", "rotateY(180deg)");
    });
    
/*===========================================================================*/

    // OPEN CONTACT FORM
    TweenMax.set("#contact-window", { scale: 0});

    const elastic = Elastic.easeOut.config(2, 0.4);
    const elasticSoft = Elastic.easeOut.config(1, 0.75);
    const bounce = Bounce.easeOut;

    const openContact = new TimelineMax()
        .pause()
        .set(".contact-window-container", {display: 'none'})
        .set(".contact-window-container", {display: 'flex'})
        .set(".cover-body", { visibility:'hidden'})
        .set(".cover-body", { visibility:'visible'})
        .to(".cover-body", 0.4, { opacity: 0.8})
        .to("#contact-window", 0.4, {
            scaleY: 1,
            ease: bounce
        })
        .to("#contact-window", 0.3, {
            scaleX: 0.005,
            ease: bounce
        }, "-=0.3")
        .to("#contact-window", 0.3, { scaleX: 1});
     
    $(".open-contact").click(()=> { openContact.restart(); });
    $("#close-contact").click(()=> { openContact.reverse(); });
    $(".cover-body").click(()=> { openContact.reverse(); });
    // not working anymore, .cover-body is covered by .contact-window-container

/*===========================================================================*/

    // OPEN DROPDOWN
    let contentShown = false;
    $(".dropdown").click(function() {
        contentShown = !contentShown;
        contentShown?
            $(".dropdown-content").show()
        :   $(".dropdown-content").hide();
    });

/*===========================================================================*/

    // SCROLL UP FROM PAGE END
    $(".scroll-up").click(function() {
        $(window).scrollTop(0);
    })
});
