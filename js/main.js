$(function(){

	$('.slider').slick({
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		arrows: false,
  		dots: true,
  		responsive: [
  		{
  		breakpoint: 1175,
  		settings: {
  			slidesToShow: 2,
  			slidesToScroll: 2,
  			}
  		},
  		{
  			breakpoint: 769,
  	        settings: {
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			}
  		}
  	]
});

	$('.menu__btn').click(function(event) {
		$('.menu__btn,.menu__list').toggleClass('active');
	});

});