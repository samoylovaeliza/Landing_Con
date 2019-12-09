jQuery(document).ready(function(){

 //Visible header function

  let half_height = $('.full-page').height() / 2 ;
   
    window.onscroll = function() {
      if($(document).width() < 1024)
    return false;
        if(window.pageYOffset > half_height)
     $("header").addClass("fixed"),
     $("header").animate({
       "top": 0
     }, 'slow'),
     $("header").css({
       opacity: 0.75,
       backgroundColor: "#fff",
       backgroundSize: "cover",
       zIndex: 10
     }),
     $("header .logo, header #show-menu").css("color", "#454545"),
       $("#nav").hide(),
       $("#show-menu").show();
    else
     $("header").removeClass("fixed"),
     $("header").animate({
       "top": "-70px"
     }, 'slow'),
     $("header .logo, header #show-menu").css("color", "#fff"),
     $("header").css({
       background: "transparent",
       opacity: 1
   }),
     $("#nav").show(),
     $("#show-menu").hide();
  };

  // Up-button function

  $(".up-btn").on("click", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 'slow')
  });
  
  //Hidden menu showing and closing
  
  $("#show-menu").on("click", function(){
    $("#hidden-menu").animate({
      "right":0
    }, 500);
  });
  $("#hidden-menu .close").on("click", function(){
    $("#hidden-menu").animate({
      "right": "-300px"
    }, 200);
  });
  
});
