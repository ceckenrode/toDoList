$(document).ready(function(){

  $(document).on("click", "#addNow", function(e) {
    e.preventDefault();
    var inputValue = $("#toBeAdded").val();
    
    if (inputValue === "") {
      return;
    }

    var checkDuplicates = false;

    $("#outputTable tr").each(function() {
      if ($(this).text() == inputValue) {
        checkDuplicates = true;
        alert("You already have this item to your to-do list.");
        $("#toBeAdded").val('').focus();
        return false;
      }
    });

    if (checkDuplicates === false) {
    var newTd = $("<td>").append(inputValue);
    var newTr  = $("<tr>").append(newTd);
    var btnStr = "<td><button class='btn btn-primary complete'><span class='glyphicon glyphicon-ok'></span></button>";
    btnStr += "<button class='btn btn-danger remove'><span class='glyphicon glyphicon-remove'></span></button></td>";
    newTr.append(btnStr);
    $("#outputTable").prepend(newTr);
    $("#toBeAdded").val('').focus();
  }
    //var listLength = $("#outputTable tr").length;
    

  });

  $("#outputTable").on("click", ".complete", function() {
        $(this).parent().prev().css("text-decoration", "line-through");
      });

  $("#outputTable").on("click", ".remove", function() {
        $(this).parent().parent().remove();
      });



});