function convertTemp() {
    var tempInput = parseFloat(document.getElementById('tempInput').value);
    var tempScale = document.getElementById('tempScale').value;
    var result;
    var calculationText;

    if (tempScale === 'celsius') {
        // Konversi dari Celsius ke Fahrenheit: (Celsius * 9/5) + 32
        result = (tempInput * 9/5) + 32;
        calculationText = tempInput + " Celsius * (9/5) + 32 = " + result + " Fahrenheit";
        document.getElementById('result').innerHTML = tempInput + " Celsius = " + result + " Fahrenheit";
    } else {
        // Konversi dari Fahrenheit ke Celsius: (Fahrenheit - 32) * 5/9
        result = (tempInput - 32) * 5/9;
        var roundedResult = Math.round(result * 10) / 10;
        calculationText = tempInput + " Fahrenheit - 32) * (5/9) = " + roundedResult + " Celsius";
        document.getElementById('result').innerHTML = tempInput + " Fahrenheit = " + roundedResult + " Celsius";
    }

    document.getElementById('calculation').innerHTML = "Kalkulasi: " + calculationText;
}