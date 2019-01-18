
function changeColor(sheet) {
    $("#color-set").attr("href", "./styles/" + sheet + ".css");
}

jQuery(function($) {
    $("#color-themes > li").each(function() {
        $(this).click( ()=> changeColor(this.id) );
    })
})