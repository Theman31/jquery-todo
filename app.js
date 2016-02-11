var todos = [
  {
    "taskName": "HVN meetup",
    "dueDate": "016-02-26"
  },
  {
    "taskName": "Saturday",
    "dueDate": "016-02-26"
  },
  {
    "taskName": "Sunday",
    "dueDate": "016-02-26"
  }
]

var todones = [
  {
    "taskName": "start school",
    "dueDate": "016-02-08"
  },
]

var $list = $('#todoTable');
var $todonesList = $('#todonesList')

todos.map(function(t){


  
    $list.append('<tr class="rrr"> \
                  <td>' + t.taskName + '</td> \
                  <td>' + t.dueDate + '</td> \
                  <td><button class="btn btn-primary markTodone">done</button></td> \
                </tr>'); 
})

todones.map(function(t){

  
    $todonesList.append('<tr> \
                  <td>' + t.taskName + '</td> \
                  <td>' + t.dueDate + '</td> \
                </tr>'); 
})

var newTodo = function(event){

  event.preventDefault();

  var $event = $(event.target);
  var $form = $event.closest('form');
  
  var $inputs = $form.find('input');

  var taskName = $inputs.first().val();
  var dueDate = $inputs.last().val();

  todos.push({"taskName": taskName, "dueDate": dueDate})  

  $list.append('<tr> \
                  <td>' + taskName + '</td> \
                  <td>' + dueDate + '</td> \
                  <td><button class="btn btn-primary">done</button></td> \
                </tr>'); 
}

var completeTodo = function(event){

  console.log('event triggered')

  event.preventDefault();

  var $event = $(event.target);

  var taskName = $event.closest('tr').children().eq(0);
  var dueDate = $event.closest('tr').children().eq(1);


  todones.push({"taskName": taskName, "dueDate": dueDate})  

  $todonesList.append('<tr> \
                  <td>' + taskName + '</td> \
                  <td>' + dueDate + '</td> \
                  <td><button class="btn btn-primary">done</button></td> \
                </tr>'); 
}

$('#submitTodo').on('click', newTodo)
$('.markTodone').on('click', completeTodo)


