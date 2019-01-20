
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
    $("#open-contact").click(function() {

    });

});
