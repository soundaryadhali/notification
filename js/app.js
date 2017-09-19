$(function(){
    $('#expand-1').Zippy();
    $('#toggle-button').on('click',function () {
        $('#toggle-button').toggleClass('rotate-button');
    });
});