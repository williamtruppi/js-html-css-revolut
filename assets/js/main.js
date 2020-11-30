var links = $("li");
console.log(links);
var dropdown_menu = $(".navbar_center li > ul").siblings().get();
console.log(dropdown_menu);

links.mouseenter(function () { 
  $('ul', this).addClass("visible");
});

links.mouseleave(function () { 
  if ($("ul", this).hasClass("visible")){
    $('ul', this).removeClass("visible");
  }
}); 
 

/* $(document).ready(function () {       
  $('#nav li').hover(function () {           
    //mostra sottomenu          
            
  }, function () {           
    //nascondi sottomenu            
    $('ul', this).stop(true, true).slideUp(200);                
  }   
);  */
