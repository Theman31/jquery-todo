$(document).ready(function(){
  $("#submitTodo").click(function(e) {
    e.preventDefault()
    var taskName = $("#taskName").val()
    var dueDate = $("#dueDate").val()
    var task = {
      'name': taskName,
      'date': dueDate
    }
    var taskHTML = "<tr><td>" + taskName + "</td><td>" + dueDate +"</td> \
    <td><button id = 'debutton' class='btn btn-primary deleteTodo'>Done</button></td> \
  </tr>";
      $("#todoTable").append(taskHTML)
    console.log(task);
    $(".deleteTodo").on('click', function(){
      console.log($(this).parent().parent().children())
      var aardvark = $(this).parent().parent();
      aardvark = aardvark.children().slice(1,0);
      $("#todonesList").prepend(aardvark)
    });
  });
});


// $(document).ready(function(){
//   $("#debutton").on('click', function(){
//     console.log("Class Works :)")
//   });
// });
// "<td>" + check +"</td>"
