$(document).ready(function () {
	var currentFloor = 2;
	var floorPath = $('.home-image path'); 
	var counterUp = $(".counter-up");
	var counterDown = $(".counter-down");

	$('.home-image path').on("mouseover", function () {
		floorPath.removeClass("current-floor");
		currentFloor = $(this).attr('data-floor');
		$(".counter").text(currentFloor);
	});

	counterUp.on("click", function () {
		if (currentFloor < 18) {
			currentFloor++;
			uscurrentFloor = currentFloor.toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGrouping: false
			});
			$(".counter").text(currentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${currentFloor}]`).toggleClass("current-floor");
		}
	});

	counterDown.on("click", function () {
		if (currentFloor > 2) {
			currentFloor--;
			uscurrentFloor = currentFloor.toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGrouping: false
			});
			$(".counter").text(currentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${currentFloor}]`).toggleClass("current-floor");
		}
	});

});

