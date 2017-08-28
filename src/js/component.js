$(document).ready(function() {
  $('.tab-nav li').click(function() {
    $('.tab-nav li').removeClass('active');
    $('.tab-content .content').removeClass('active');
    $(this).addClass('active');
    $('#'+$(this).data('tab')).addClass('active');
  });
  $('.overl').click(function() {
    $(this).hide();
  });
 $(window).scroll(function() {
        return $('.map-box .overl').show();
    });
    $('.modal-btn').click(function (e) {
    e.preventDefault;
    $('#' + $(this).data('modal')).show('1000');
    $('#' + $(this).data('modal')).animate({
      opacity: 1,
    });
    $('body').addClass('overl-h');
    $('.overlay').show('1000');
  });

  $('.overlay, .popup__close').click(function () {
    $('body').removeClass('overl-h');
    $('.modal').hide('1000');
    $('.overlay').hide('1000');
    $('.modal').animate({
      opacity: 0,
    });
  });
});