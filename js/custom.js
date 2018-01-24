
// $('.slick-carousel').slick({
//   dots:true,	
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });

$('.single-item').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1
});

$('.slide1').hover(function(){
  // $('.slide1').css('left','0%');
  $('.slide2 , .menubox2').css('left','70%');
  $('.slide3 , .menubox3').css('left','80%');
  $('.slide4').css('left','90%');

})

$('.slide2').hover(function(){
  $('.slide3 , .menubox3').css('left','80%');
  $('.slide4').css('left','90%');
  $('.slide2 ,.menubox2').css('left','10%');

})
$('.slide3').hover(function(){
  $('.slide1').css('left','0%');
  $('.slide2 ,.menubox2').css('left','10%');
  $('.slide3 , .menubox3').css('left','20%');
  $('.slide4').css('left','90%');

})

$('.slide4').hover(function(){
  // $('.slide1').css('left','0%');
  $('.slide2 ,.menubox2').css('left','10%');
  $('.slide3').css('left','20%');
  $('.slide4').css('left','30%');

})



$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".smooth").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});











// $('p').hide();
  
$('#salad').click(function(){

  $('.list').slideToggle();
  
});






































