$(function() {
	var callback = function(event) {
		event.preventDefault();
		var input = $('input[type=text][name=item]'),
			value = input.val(),
			need = ($(event.target).attr('id') === 'addNeed'),
			item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">remove</a></li>'),
			list = (need) ? $('ul').first() : $('ul').last();