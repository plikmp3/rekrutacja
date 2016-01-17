$(document).ready(function() {
    $('.characters form').submit(function(event){
      var t = $('#checkbox_trooper').is(":checked");
      var v = $('#checkbox_vader').is(":checked");
      var y = $('#checkbox_yoda').is(":checked");
      if((v||t)&& !y){
      var audio = new Audio('imperial_march.mp3');
      audio.play();
      event.preventDefault();
      }
    });
             
 $(window).resize(function(){
  $('.characters').css({
   position:'absolute',
   left: ($(window).width() 
     - $('.characters').outerWidth())/2,
   top: ($(window).height() 
     - $('.characters').outerHeight())/2
  });
 });
 $(window).resize();

});

