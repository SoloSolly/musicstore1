$(document).ready(function(){
    $('button#create-playlist').click(function(){
        $.each($("input[name='scheckbox']:not(:checked)"), function () {
          $(this).parents(".row").hide();
        });
    })
 });
 $(document).ready(function(){
    $('.col-md-4').hover(function(){
          $(this).parents(".row").css("color", "black");
    });
 })
 $(document).ready(function(){
    $('.col-md-4').mouseleave(function(){
       $(this).parents(".row").css("color", "white");
    });
 })
 