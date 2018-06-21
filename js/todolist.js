let counter = 0;
let countDone = 0;

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



//Add a new item to ToDo list, Check if text field is empty
$(document).ready(function () {
	$(document).on('click', '.submit', function () {

		let todo = $('#txt_name').val();
		if ($('#txt_name').val().length === 0) {
			var alertMessage = {
				show: function(content) {
					$('.alert').html(content);
					setTimeout(function(){
						$('.alert').html('');
					}, 3000);
				}
			};
			alertMessage.show('<div>Item text field is Empty!</div>');
		} else {
				console.log('item not present');
				counter++;
				$('#todo-list').append(`<li class="list-item"> ${todo} </li>`);
				$('#count').replaceWith(`<span id="count">ToDos left: ${counter}</span>`);
		}
	});
})


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

