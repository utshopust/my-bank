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
    const selectedBank = document.getElementById("allBank").value;
    

    if(amount<0){
      alert("Invalid Amount");
      return;
    }

    if (account.length === 11) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.classList.add("border", "p-2", "mb-2","rounded", "bg-green-100");
        div.innerHTML = `
        <p class="font-bold text-lg">Transaction Successful</p>
        <p>Amount: ${amount}</p>
        <p>From: ${selectedBank} - ${account} </p>
        `;
        container.append(div);
        // document.getElementById("add-money-form").reset();
        
      } else {
        alert("wrong pin");
      }
    } else {
      alert("wrong Number");
    }
  });
