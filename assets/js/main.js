var links = $("li.menu");
console.log(links);

links.mouseenter(function () { 
  $('ul', this).addClass("visible");

});

links.mouseleave(function () { 
  if ($("ul", this).hasClass("visible")){
    $('ul', this).removeClass("visible");
  }
}); 
 
