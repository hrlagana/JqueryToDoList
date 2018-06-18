//Remove an item from Done-List and put it to ToDo-list
$(document).ready(function () {
	$(document).on('click', '.done-list-item', function () {
		let selectedElement = $(this);
		selectedElement.remove();
		$('#todo-list').append($('<li class="list-item"></li>').text(selectedElement.text()));
		counter++;
		countDone--;
		let listDoneEmpty = false;
		$('#count').replaceWith(`<span id="count">ToDos left: ${counter}</span>`);
	});
})