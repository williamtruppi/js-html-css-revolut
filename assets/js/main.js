var links = $("li.menu");
console.log(links);
var dropdownMenu = $(".navbar_center li > ul").siblings().get();
console.log(dropdownMenu);

links.mouseenter(function () { 
  $('ul', this).addClass("visible");
});

$(document).click(function () { 
  if ($("ul", this).hasClass("visible")){
    $('ul', this).removeClass("visible");
  }
}); 
 
