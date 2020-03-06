// $(document).ready(function() {
//    $("#create-playtlist").click(function(){
//       var a = document.getElementsByName("scheckbox");
//       if($(a).is(":checked")){
//          $("checkboxes").show();
//       } else{
//          $("checkboxes").hide();
//       }
//    })
// });
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
window.addEventListener('load', () => {
  const sounds = document.querySelectorAll(".sounds");
  const pads = document.querySelectorAll(".playlist-body .row");
  console.log("this is pads ",pads)
  pads.forEach((pad,index) => {
     $(pad).click(function(){
      for(i=0; i<sounds.length; i++) sounds[i].pause();
      sounds[index].currentTime = 0;
      console.log("this is ",sounds[index-1])
        sounds[index-1].play();
     })
  })
})


