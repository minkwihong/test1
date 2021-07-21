$(function(){

$('.top').on('click',function(){
    scrollTo(0,0);
});

$('.toggle').on('click',function(){
  $('.control').toggleClass('active');
  $(this).toggleClass('active')
 $('.toggle span').toggleClass('active');
})

});