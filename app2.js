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
    <td><button class='btn btn-primary deleteTodo'>Done</button></td> \
  </tr>";
      $("#todoTable").append(taskHTML)
    console.log(task)
  });
});

// "<td>" + check +"</td>"
