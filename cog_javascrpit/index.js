
function changeColor() {
    var button = document.getElementById("colorButton");
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button.style.backgroundColor = randomColor;
  }


  function getGreeting() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var greeting;

    if (currentHour < 12) {
      greeting = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }

    return greeting;
  }

  // var message = getGreeting();
  // alert(message);


  function showGreeting(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    var message = getGreeting();
    alert(message);
  }


  function addNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;

    document.getElementById('result').innerText = 'Result: ' + result;
  }