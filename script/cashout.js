document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    
    const amount = document.getElementById("cash-out-amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    convertedMainBalance = parseInt(mainBalance);

    if (convertedPin === 1234) {
      const sum = convertedMainBalance - convertedAmount;
      document.getElementById("main-balance").innerText = sum;
    } else {
      alert("wrong pin");
    }
  });
