$(document).ready(function() {
  $(".btn").click(function(){
    var btnVal = $(this).val()
    var entryStr = $("#entry").text()
    var histStr = $("#history").text()
    // var lastClicked = $(this).attr("class")
    // var entry = $("#entry").html()
    // var history = $("#history").html()

    if ($(this).hasClass("calculate")) {
      result = eval($("#history").text());
      // console.log(result)
      $("#entry").html(result);
      $("#history").append("= " + result);
    }
    else if ($(this).hasClass("clearall")) {
      clearall();
    }
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
      // console.log($("#entry").text())
      if ($("#history").text() === "0") {
        $("#entry").html(btnVal);
        $("#history").html(btnVal);
      } else {
        $("#entry").append(btnVal);
        $("#history").append(btnVal);
      }
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
