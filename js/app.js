$(function(){
    $("[data-toggle='tooltip']").tooltip()

})

var scroll = new SmoothScroll ('header a[animate]', {  
    durationMin: 1000,
    easing: 'easeInQuad'
});