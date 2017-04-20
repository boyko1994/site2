$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $(".slider .slides").children(".slide"); // Получаем массив всех слайдов
	var width = $(".slider .slides").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	i--; // уменьшаем кол-во слайдов на один ( для проверки в будущем )

	$(".slider .slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	$("body .slider .next").click(function(){	// Событие клика на кнопку "следующий слайд"
		if (offset < width * i) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
		}
	});


	$("body .slider .prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущего слайда
			$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
		}
	});

});

$(document).ready(function() {
    $('#touch-menu').click(function() {
       $('.nav').slideToggle(1000);
       });//end slide toggle
  $('.nav a').click(function() {
       if (  $(window).width() < 968 ) {
       $('.nav').slideToggle(1000);
       }
       });
  $(window).resize(function() {		
	  	if (  $(window).width() > 968 ) {			
			$('.nav').removeAttr('style');
		   }
});//end resize
});//end ready


$(function() {
	 $(window).scroll(function() {
		    if($(this).scrollTop() > 400) {
		    $('#toTop').fadeIn();
		    } else {
		    $('#toTop').fadeOut();
		    }
		    });
	$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},800);
	});
});

$(document).ready(function(){
	$(".nav a").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});