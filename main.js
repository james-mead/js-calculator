$(document).ready(function() {
  //global variables
  var equation = '';
  $(".btn").click(function(){
    // get current button pressed
    var btnVal = $(this).val()
    var lastValue = equation.charAt(equation.length-1)
    // animate output on click
    $("#output").hide();
    $("#output").fadeIn(200);
    if ($(this).hasClass("num")) {
      // if last value of equation was an operator, a decimial or was blank, reset output
      if (isNaN(lastValue) && lastValue !== '.' || equation === '') {
        addToEquation(btnVal)
        $("#output").html(btnVal);
        $("#history").html(equation);
      }
      // otherwise append to the output
      else {
        addToEquation(btnVal)
        $("#output").append(btnVal);
        $("#history").html(equation);
      }
    }
    else if ($(this).hasClass("operator")) {
          switch(lastValue) {
          case "+":
          case "-":
          case "*":
          case "/":
              alert("Error, last value was an operator")
              break;
          default:
            addToEquation(btnVal)
            $("#history").html(equation);
      }
    }
    else if ($(this).hasClass("calculate")) {
      calculate ()
    }
    // clear history and display
    else if ($(this).hasClass("clearall")) {
      clearall();
    }
    // clear last from history
    else if ($(this).hasClass("clearlast")) {
      if (equation.includes("=")) {
        clearall()
      } else {
        clearlast()
      }
    }
    console.log("Equation: " + equation)
  })

  function addToEquation (val) {
    return equation += val
  }

  function calculate () {
    var arr = equation.split(/([^0-9.])/g);
    var result = Number(arr[0]);
    for (var i = 1; i < arr.length; i++) {
      var nextNum = Number(arr[i+1])
      var symbol = arr[i];
      switch (symbol) {
        case "+":
          result += nextNum;
          break;
        case "-":
          result -= nextNum;
          break;
        case "*":
          result *= nextNum;
          break;
        case "/":
          result /= nextNum;
          break;
            alert("move to next number")
            break;
      }
      i++
    }
    $("#output").html(result);
    equation += '=' + result
    $("#history").html(equation);
  }

  function clearall() {
    equation = ''
    $("#output").html("0");
    $("#history").html("0");
  }

  function clearlast() {
    var arr = equation.split(/(\D)/g);
    arr.pop()
    var joinArr = arr.join('');
    $("#output").html('0');
    $("#history").html(joinArr);
  }
});
