

//Add a new item to ToDo list, Check first if it is already in the list
$(document).ready(function () {
	$(document).on('click', '.submit', function () {
		let todo = $('#txt_name').val();
		let itemFound = false;
		

		if ($("#todo-list li:contains(" + todo + ")").length) {
			itemFound = true;
		}

		if (itemFound == true) {

			var alertMessage = {
				show: function(content) {
					$('.alert').html(content);
					setTimeout(function(){
						$('.alert').html('');
					}, 3000);
				}
			};
			alertMessage.show('<div>Item already exists in list!</div>');
		}
		else {
			console.log('item not present');
			counter++;
			$('#todo-list').append(`<li class="list-item"> ${todo} </li>`);
			$('#count').replaceWith(`<span id="count">ToDos left: ${counter}</span>`);
		}
	});
})
