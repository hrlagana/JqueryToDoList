//Remove an item from ToDo-list and put it back to Done-list
$(document).ready(function () {
	$(document).on('click', '.list-item', function () {
		let selectedElement = $(this);
		selectedElement.remove();
		$('#done-list').append($('<li class="done-list-item"></li>').text(selectedElement.text()));
		counter--;
		countDone++;
		$('#count').replaceWith(`<span id="count">ToDos left: ${counter}</span>`);
	});
})