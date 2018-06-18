
//Undo the last insertion to Done-List
$(document).ready(function () {
	$(document).on('click', '.undo', function () {

		if (countDone != 0) {
			let selectedElement = $('ol').children('li').last();
			selectedElement.remove();
			$('#todo-list').append($('<li class="list-item"></li>').text(selectedElement.text()));
			counter++;
			countDone--;
			$('#count').replaceWith(`<span id="count">ToDos left: ${counter}</span>`);
		}
	});
})
