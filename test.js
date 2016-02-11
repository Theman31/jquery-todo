function handleNewTodo(event){

  event.preventDefault();

  var $event = $(event.target);
  var $form = $event.closest('form');
  
  var $inputs = $form.find('input');

  var taskName = $inputs.first().val();
  var dueDate = $inputs.last().val();

  var $list = $('#todoTable');
  $list.append('<tr> \
                  <td>' + taskName + '</td> \
                  <td>' + dueDate + '</td> \
                  <td><input type="checkbox"></td> \
                </tr>');
}


$('#submitTodo').on('click', handleNewTodo);


var handleChange = function(){

  var $box = $(this);

  if($box.is(':checked')){
    alert('its checked')
  } else {
    alert('its not checked')
  }

}


$('.checkss').on('click', handleChange)