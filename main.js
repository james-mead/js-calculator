$(document).ready(function() {
  $(".btn").click(function(){
    var btnVal = $(this).val()
    var lastClicked = $(this).attr("class")

    if ($(this).hasClass("num")) {
      console.log($("#entry").text())
      if ($("#entry").text() === "0") {
        $("#entry").html(btnVal);
        $("#history").html(btnVal);
      } else {
        $("#entry").append(btnVal);
        $("#history").append(btnVal);
      }
    } else {
      $("#entry").html(btnVal);
      $("#history").append(btnVal);
    }
  })
});
