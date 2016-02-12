var $list = $('#todoTable');
var $todonesList = $('#todonesList');

var taskOne = { name: "do some stuff", date: "02/16/2016" };
var taskTwo = { name: "do some more stuff", date: "02/18/2016" };
var taskThree = { name: "do even more some more stuff", date: "02/18/2016" };

var todos = [taskOne, taskTwo, taskThree];


todos.forEach(function(todo){
      $list.append('<tr class=""> \
                <td>' + todo.name + '</td> \
                <td>' + todo.date + '</td> \
                <td><button class="btn btn-primary markTodone deleteTodo">done</button></td> \
              </tr>'
            );
})


var newTodo = function(event){

  event.preventDefault();

  var taskName = $('#taskName').val();
  var dueDate = $('#dueDate').val();

  if(taskName && dueDate){

    $list.append('<tr class=""> \
                    <td>' + taskName + '</td> \
                    <td>' + dueDate + '</td> \
                    <td><button class="btn btn-primary markTodone">done</button></td> \
                  </tr>'
                );  
  }

  $('#taskName').val('');
  $('#dueDate').val('');
}

var deleteTodo = function(event){

  event.preventDefault();

    $(event.target).closest('tr').remove() 

}

$('#submitTodo').on('click', newTodo)
$('.deleteTodo').on('click', deleteTodo)