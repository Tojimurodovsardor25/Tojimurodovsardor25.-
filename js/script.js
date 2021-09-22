$(function () {
  const $startGame = $('.Start-game')
  const $startBut = $('.start_button')
  

  $startBut.on('click', function(){
    $startGame.addClass("d_noneeee")
    $('.big-box').animate({
      opacity: "1"
    } , 10);
  })
});
