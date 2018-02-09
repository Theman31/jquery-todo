var $list = $('#todoTable');

var taskOne = { name: "do some stuff", date: "02/16/2016" };
var taskTwo = { name: "do some more stuff", date: "02/18/2016" };
var taskThree = { name: "do even more some more stuff", date: "02/18/2016" };

var todos = [taskOne, taskTwo, taskThree];

var lookUpKey = "name" || "other name"

console.log(todos[0][lookUpKey])


console.log(todos[0].name)
console.log(todos[0]["name"])


var str = "hello world.. How are you ";

var moreStr = " thats fantastic"

var strPlusName = "Douglas";
var anotherName = "John";

console.log(str + strPlusName + moreStr)
console.log(str + anotherName + moreStr)



todos.forEach(function(t){
      $list.append('<tr class=""> \
                <td>' + t.name + '</td> \
                <td>' + t.date + '</td> \
                <td><button class="btn btn-primary deleteTodo">done</button></td> \
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
                    <td><button class="btn btn-primary  deleteTodo">done</button></td> \
                  </tr>'
                );
    $('.deleteTodo').on('click', deleteTodo);
  }

  $('#taskName').val('');
  $('#dueDate').val('');
}

var deleteTodo = function(event){
  $(event.target).closest('tr').remove();
}


$('#submitTodo').on('click', newTodo)
$('.deleteTodo').on('click', deleteTodo)
