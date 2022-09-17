$(window).scroll(function(){
  if($(window).scrollTop()){
    $(".nav-shadow").addClass("white");
  }
  else {
    $(".nav-shadow").removeClass("white");
  }
});