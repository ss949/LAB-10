function greetUser(name) {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = "Hello, " + name + "!";
}

function addNumbers(){
    var num1 = parseFloat(document.getElementById('number1').value)
    var num2 = parseFloat(document.getElementById('number2').value)
    var sum = num1 + num2

    document.getElementById('result').innerText = sum;
}


function updateTitle(){
    var inputValue = document.getElementById("inputField").value
    document.getElementById("title").innerText = inputValue

function concatenateText() {
    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value        var combined = input1 + " " + input2
    document.getElementById("combinedText").innerText = combined
    }
    
    var button = document.getElementById("changeBackground")
    var colorBox = document.getElementById("colorBox")
    button.addEventListener("click", function() {
        colorBox.style.backgroundColor = "blue"})