const $ = jQuery;
const btnToggle = $(".toggle-menu-mobile--js"),
	menu = $(".menu-mobile--js")

function 	eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});
	JSCCommon.modalCall(); 

	JSCCommon.inputMask();
	JSCCommon.datepicker();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/QUIZ_1.jpg);"></div>')
	// /добавляет подложку для pixel perfect

 
	};
	// /form
	if (document.readyState !== 'loading') {
		eventHandler();
	} else {
		document.addEventListener('DOMContentLoaded', eventHandler);
	}
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy


	// /LazyFunction
	datepicker() {
		var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

		$(".date-picker-block-js").each(function () {
	
			var th = $(this);
	
			th.find('.startDate').datepicker({
				locale: 'ru-ru',
				uiLibrary: 'bootstrap4',
				// iconsLibrary: 'fontawesome',
				format: 'dd.mm.yyyy',
				minDate: today,
				maxDate: function () {
					return th.find('.endDate').val();
				}
			});
			th.find('.endDate').datepicker({
				locale: 'ru-ru',
				uiLibrary: 'bootstrap4',
				// iconsLibrary: 'fontawesome',
				format: 'dd.mm.yyyy',
				minDate: function () {
					return th.find('.startDate').val();
				}
			});
		})
	},
	modalCall() {
	 
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			// type : 'inline',
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
 

	// /CustomYoutubeBlock
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7 [(][0-9]{3}[)]-[0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7 (999)-999-99-99");
	}
	// /inputMask

};
 
// JSCCommon.LazyFunction();
/***/
