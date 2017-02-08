$(document).ready(function() {
  $(".btn").click(function(){
    var btnVal = $(this).val()
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
      $("#entry").html("0");
      $("#history").html("0");
    }
    else if ($(this).hasClass("clearlast")) {
      var arr = $("#history").text().split(/(\D)/g);
      arr.pop();
      var joinArr = arr.join('');
      console.log("arr= " + joinArr);
      // var arrJoin = arrPop.join();
      // console.log("join: " + arrJoin);
      $("#entry").html('0');
      $("#history").html(joinArr);
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
    // console.log(history);
  })
});
