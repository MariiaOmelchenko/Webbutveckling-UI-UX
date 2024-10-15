function validateAndConvert(input) {
    // Försök konvertera input till ett flyttal (decimal) först
    const parsedFloat = parseFloat(input);
  
    // Kontrollera om det är ett giltigt tal
    if (isNaN(parsedFloat)) {
      return NaN; // Ogiltig inmatning
    }
  
    // Om det är ett giltigt tal, avrunda det till närmaste heltal
    return Math.round(parsedFloat);
  }
  
  function runFizzBuzz() {
    const input = document.getElementById("inputNumber").value;
    const outputDiv = document.getElementById("output");
  
    // Rensa tidigare output
    outputDiv.textContent = "";
  
    const number = validateAndConvert(input);
  
    // Kontrollera om omvandlingen gav ett giltigt heltal > 10
    if (isNaN(number) || number <= 10) {
      outputDiv.textContent = "Ange ett giltigt tal större än 10.";
      return;
    }
  
    let result = "";
  
    for (let i = 0; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += "FizzBuzz\n";
      } else if (i % 3 === 0) {
        result += "Fizz\n";
      } else if (i % 5 === 0) {
        result += "Buzz\n";
      } else {
        result += i + "\n";
      }
    }
  
    outputDiv.textContent = result;
  }
  