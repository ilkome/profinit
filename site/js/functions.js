

/*
	Верстун	Илья Шикарный
	shikarniy.com
*/


$(document).ready(function() {
	// Ховер при наведении
	// ==================================================
	$(".hoverbg").hover(
		function() {
			if(!$(".hoverbg .icon").hasClass("active")) {
				$(this).find(".icon .act").stop().fadeIn(300)
			}
		}, function() {
			if(!$(".hoverbg .icon").hasClass("active")) {
				$(this).find(".icon .act").stop().fadeOut(300)
			}
		}
	)


	// МЕНЮ РЕДАКТИРОВАНИЯ
	// ==================================================
	// Открытие 
	$(".wbox-menu-drop > a").on("click", function(e){
		e.preventDefault()
		var thisis = $(this)
		thisis.find(".icon").addClass("active")
		thisis.closest(".wbox-menu-drop").find(".dropmenu").slideDown(300)
	})
	// Закрытие по клику в любой части экрана
	$(document).click(function(e){
		if ($('.wbox-menu-drop .dropmenu:visible').length && !$(e.target).closest('.wbox-menu-drop').length){
			$('.wbox-menu-drop .dropmenu').fadeOut(300);
			$('.wbox-menu-drop .icon').removeClass('active')
			$('.wbox-menu-drop .icon .act').stop().fadeOut(300)
		}
	})
	// Редактирование 
	$(".wbox-menu-drop .dropmenu a.edit").on("click", function(e){
		e.preventDefault()
		var thisis = $(this)

		$('.wbox-menu-drop .dropmenu').fadeOut(500);
		$('.wbox-menu-drop .icon').removeClass('active')
		$('.wbox-menu-drop .icon .act').stop().fadeOut(500)

		thisis.closest(".wbox").find(".item-edit").slideDown(700);
		thisis.closest(".wbox").find(".item.hide").slideDown();
		thisis.closest(".wbox").find(".row.hide").slideDown();
		thisis.closest(".wbox").find(".wbox-more ").fadeOut();

		thisis.closest('.wbox-menu-drop').fadeOut(500);
		thisis.closest('.wbox').find(".wbox-menu.save").fadeIn();
	})

	//	Сохранение
	$(".wbox-menu.save").on("click", function(e){
		e.preventDefault()
		var thisis = $(this)
		thisis.closest(".wbox").find(".item-edit").slideUp(700);
		thisis.fadeOut();
		thisis.closest('.wbox').find(".wbox-menu-drop").fadeIn(500);
	})

	//	Закрыть режим редактирования
	$(".js-close-edit-mode").on("click", function(e){
		$(".wbox").find(".item-edit").slideUp(700);
		$('.wbox').find(".wbox-menu-drop").fadeIn(500);
		$('.wbox').find(".wbox-menu.save").fadeOut(500);
	})


	//	Свитчер
	//==================================================
	$("ul.switch").on("click", function(e){
		e.preventDefault()
		thisis = $(this).find(".switch-con")
		box = thisis.closest("ul.switch")
		target = $(e.target)
		//if(target.parent().hasClass("active")) return
		if(thisis.hasClass("right")) {
			box.find(".item").removeClass("active")
			box.find(".item span").text("выкл")
			thisis.removeClass("right")
		} else {
			box.find(".item").addClass("active")
			thisis.addClass("right")
			box.find(".item span").text("вкл")
		}
	})


	//	Показать еще
	//==================================================
	$(".tbox-more a").on("click", function(e){
		e.preventDefault()
		thisis = $(this)
		box = thisis.closest(".tbox-content").find(".item.hide")
		thisis.parent().fadeOut()
		box.slideDown()
	})
	$(".wbox-more a").on("click", function(e){
		e.preventDefault()
		thisis = $(this)
		box = thisis.closest(".wbox-content").find(".item.hide")
		thisis.parent().fadeOut()
		
		if((thisis.parent()).hasClass("table-items")) {
			box.slideRow('down')
		} else {
			box.slideDown()
		}
	})


	//	Показать еще квалификации
	//==================================================
	$(".show-more-qualification a").on("click", function(e){
		e.preventDefault()
		thisis = $(this)
		box = thisis.closest(".wbox-content").find(".row.hide")
		thisis.parent().fadeOut("500")
		box.slideDown()
	})

	//	Показать еще комменатрии
	//==================================================
	$(".comments-show-more a").on("click", function(e){
		e.preventDefault()
		thisis = $(this)
		box = thisis.closest(".wbox-comments").find(".comments .comment.hide")
		console.log(box)
		thisis.parent().fadeOut("500")
		box.slideDown()
	})
	


	// Слайдер работы
	// ==================================================
	var SliderItemPrev = $(".works-time .slider-wrap").owlCarousel({
		items: 3,
		loop: false,
		nav: false,
		navText: false,
		dots: false,
		smartSpeed: 800,
		margin:20,
		touchDrag: true,
		autoHeight: false,
	})
	SliderItemPrev.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY<0) {
			SliderItemPrev.trigger('next.owl')
		} else {
			SliderItemPrev.trigger('prev.owl')
		}
		e.preventDefault()
	})


	// Слайдер работы
	// ==================================================
	var SliderComingTargets = $(".wbox-coming-targets .slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: false,
		dots: false,
		smartSpeed: 800,
		margin:100,
		touchDrag: true,
		autoHeight: false,
	})
	$('.wbox-coming-targets .right').click(function() {
		SliderComingTargets.trigger('next.owl.carousel')
	})
	$('.wbox-coming-targets .left').click(function() {
		SliderComingTargets.trigger('prev.owl.carousel')
	})


	// Слайдер на главной
	// ==================================================
	var SliderIndex = $(".js-slider-index").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: false,
		dots: false,
		smartSpeed: 800,
		touchDrag: true,
		autoHeight: false,
	})
	$('.js-slider-index-right').click(function() {
		SliderIndex.trigger('next.owl.carousel')
	})
	$('.js-slider-index-left').click(function() {
		SliderIndex.trigger('prev.owl.carousel')
	})



	// Скролл фиксированных блоков
	// ==================================================
	var leftOffset = parseInt($(".sidebar").css('left'))
	$(window).scroll(function(){
		$('.atlas-circle .ins-content').css({'left': -$(this).scrollLeft()})
	})



	// Открытие формы комментирования
	// ==================================================
	$(".wbox-comments a.write-link").on("click", function(e){
		e.preventDefault()
		var thisis = $(this)
		thisis.closest(".write-box").find(".inside").slideDown()
		thisis.closest(".write-box").find(".inside textarea").focus()
	})



	// Табы
	// ==================================================
	$('.wbox-tabs').tabslet({
		animation: true
	})



	// Рейтинг
	// ==================================================
	$(".jq-rating").jqRating()


	// Выпадающее меню
	// ==================================================		
	// Открытие/закрытие
	$('.select-wrap .select').click(function() {
		var select_wrap = $(this).closest('.select-wrap')
		var option_list = select_wrap.find('.option-list')
		$(".select-wrap .select").removeClass("active")

		if (option_list.is(':visible')){
			option_list.slideUp('fast')
			$(this).removeClass('active')
		} else {
			if ($('.select-wrap .option-list:visible').length){
				$('.select-wrap .option-list:visible').hide()
			}
			option_list.slideDown('fast')
			$(this).addClass('active')
		}
	})
	// Выбор элемента
	$('.select-wrap .option-list li').click(function() {
		var title = $(this).closest('.select-wrap').find('.select .title')
		var option = $(this).html()
		$(this).closest('.select-wrap').find('input[type=hidden]').val($(this).attr('data-value'))
		$(this).closest('.select-wrap').find("li").removeClass("active")
		$(this).addClass("active")
		title.empty()
		title.html(option)
		$(this).closest('.option-list').slideUp(300)
		$(this).closest('.select-wrap').find('.select').removeClass('active')
	})
	// Закрытие по клику в любой части экрана
	$(document).click(function(e){
		if ($('.select-wrap .option-list:visible').length && !$(e.target).closest('.select-wrap').length){
			$('.select-wrap .option-list').slideUp(300)
			$('.select-wrap .select').removeClass('active')
		}
	})
	// Закрытие по клавише Esc 
	$(document).keyup(function(e){
		if (e.keyCode == 27) {
			$('.select-wrap .option-list').slideUp(300)
			$(".atlas-circle").fadeOut()
		}
	})

	$('.remodal .select-wrap .option-list li').on("click", function() {
		$(this).closest(".remodal").find(".form").delay(500).slideDown(500)
	})


	// Атлас профессий
	// ==================================================
	// Открытие 
	$(".open-atlas-circle").on("click", function(e){
		e.preventDefault()
		var thisis = $(this)
		$(".atlas-circle").fadeIn(500)
	})
	// Закрытие по Х
	$(".close-atlas-circle").on("click", function(e){
		e.preventDefault()
		var thisis = $(this)
		$(".atlas-circle").fadeOut()
	})
	// Закрытие в любом месте окна
	$(document).click(function(e){
		if ($('.atlas-circle:visible').length && !$(e.target).closest('.ins-content').length && !$(e.target).closest('.open-atlas-circle').length){
			$(".atlas-circle").fadeOut()
		}
	})



	// СКРИПТЫ ГРАФИКА
	// ==================================================
	// Открытие 
	$(".open-graphbox-element").on("click", function(e){
		e.preventDefault()
		var thisis = $(this)
		$(".graphbox .graph-bg-full").fadeIn(300)
		$(".graphbox .graph-inside .element").fadeIn(300)
		$(".graphbox .graph-inside .element").addClass("active")
		$(".graphbox .graph-inside .element .hidden-box").fadeIn(300)
	})
	// Закрытие в любом месте окна
	$(document).click(function(e){
		if ($('.graphbox .graph-inside .element:visible').length && 
			!$(e.target).closest('.graph-inside').length)
		{
			$(".graphbox .graph-bg-full").fadeOut()
			$(".graphbox .graph-inside .element").fadeOut()
			$(".graphbox .graph-inside .element").removeClass("active")
		}
	})


	// Career graph show times
	// ==================================================
	$(".js-graph-times").on("click", function(e){
		e.preventDefault()
		var thisis = $(this).find(".switch-con");
				
		if(thisis.hasClass("right")) {
			$(".graph-inside .element-time").fadeIn(300)
		} else {
			$(".graph-inside .element-time").fadeOut(300)
		}
	})


	//
	$(".range-income input").ionRangeSlider({
		type: "double",
		min: "10000",
		max: "1000000",
		from: 150000,
		to: 500000,
		step: "1000",
		postfix: " Р",
		hideMinMax: true,
	})
})