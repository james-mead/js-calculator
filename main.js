$(document).ready(function() {
  $(".btn").click(function(){
    //global variables
    var btnVal = $(this).val()
    var entryStr = $("#entry").text()
    var histStr = $("#history").text()

    if ($(this).hasClass("calculate")) {
      result = eval($("#history").text());
      $("#entry").html(result);
      $("#history").append("= " + result);
    }
    // clear history and display
    else if ($(this).hasClass("clearall")) {
      clearall();
    }
    // clear last from history
    else if ($(this).hasClass("clearlast")) {
      if (histStr.includes("=")) {
        clearall()
      } else {
        clearlast()
      }
    }
    else if (/^[0-9.]/.test(entryStr) === false) {
      $("#entry").html(btnVal);
      $("#history").append(btnVal);
    }
    else if ($(this).hasClass("num")) {
      if ($("#history").text() === "0") {
        $("#entry").html(btnVal);
        $("#history").html(btnVal);
      } else {
        $("#entry").append(btnVal);
        $("#history").append(btnVal);
      }
      console.log("Entry: " + btnVal)
    }
    else {
      $("#entry").html(btnVal);
      $("#history").append(btnVal);
    }
  })
});

function clearall() {
  $("#entry").html("0");
  $("#history").html("0");
}

function clearlast() {
  var arr = $("#history").text().split(/(\D)/g);
  arr.pop();
  var joinArr = arr.join('');
  $("#entry").html('0');
  $("#history").html(joinArr);
}
