$(document).ready(function(){
    $('.review-items').slick({
        slidesToScroll: 1,
        dots: false,
        appendArrows: $('.arrow-holder'),
        variableWidth: true,
        responsive: [
           {
           breakpoint: 768,
           settings: {
               arrows: false,
           }
           }
       ]
   });

   var link = $('.link'),
   box = $(".review-item-content");
   link.on('click', function(event){
       event.preventDefault();
       box.toggleClass('open');
       if(event.target.text == "Подробнее"){
           link.text("Cкрыть") 
       }
       else{
           link.text("Подробнее") 
       }
   });
})