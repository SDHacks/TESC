$(function(){
    //
    var jWindow = $(window);
    //On Scroll
    jWindow.scroll(function(){
        //Calculate opacity of the header background
        var opacity = Math.min(jWindow.scrollTop()/500, .75);
        $('#header').css('background-color', 'rgba(0,0,0,'+opacity+')');
    });
});