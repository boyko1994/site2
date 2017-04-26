
$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $(".slider .slides").children(".slide"); // Получаем массив всех слайдов
	var width = $(".slider .slides").width(); // Получаем ширину видимой области
	var x = slides.length; // Получаем количество слайдов
	var offset = x * width; // Задаем начальное смещение и ширину всех слайдов
	x--; // уменьшаем кол-во слайдов на один ( для проверки в будущем )

	$(".slider .slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	$("body .slider .next").click(function(){	// Событие клика на кнопку "следующий слайд"
		if (offset < width * x) {	// Проверяем, дошли ли мы до конца
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
		    //поява кнопки ВВЕРХ після прокрутки у 400пкс
		    if($(this).scrollTop() > 400) {
		    $('#toTop').fadeIn();
		    } else {
		    $('#toTop').fadeOut();
		    }
		    });
	 //прогортання на самий верх сайту
	$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},800);
	});
	$(".nav a,.nav-pre-last a").on("click", function (event) {
			event.preventDefault();
			//запамятовуєм значення ідентифікатора
			var id  = $(this).attr('href'),
			//визначаєм висоту від початку сторінки до якоря на посиланні
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(document).ready(function(){
	$('.overlay').click(function() {
		$(this).remove();
	});
});



