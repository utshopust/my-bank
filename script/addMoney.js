document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const account = document.getElementById("account-number").value;
    const mainBalance = document.getElementById("main-balance").innerText;
    convertedMainBalance = parseInt(mainBalance);

    if (account.length === 11) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
        const container = document.getElementById("transaction-container");
        const p = document.createElement("p");
        p.innerText = `
        Added ${amount} from ${account} account.
        `;
        container.append(p);
        
      } else {
        alert("wrong pin");
      }
    } else {
      alert("wrong Number");
    }
  });
