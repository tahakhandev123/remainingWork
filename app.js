function PlaceOrder() {
    const Size = document.getElementById("pizzaSize").value;
    const toppings = document.getElementById("toppings").value;
    const Address = document.getElementById("Address").value;
    const Number = document.getElementById("Number").value;
    const Payment = document.getElementById("Payment").value;

    if (Size === "" || toppings === "" || Address === "" || Number === "" || Payment === '') {
        alert("Please Fill The Full Form.");
        return; 
    }
    
    const orderSummary = document.getElementById("orderData");
    orderSummary.innerHTML = `
        <h2>Order Details</h2>
        <p><strong > Size:</strong> ${Size}</p>
        <p><strong >Toppings:</strong> ${toppings}</p>
        <p><strong > Address:</strong> ${Address}</p>
        <p><strong > Number:</strong> ${Number}</p>
        <p><strong > Payment With:</strong> ${Payment}</p>
        <p>Your order has been placed!</p>
        <h3>Thank You For Ordering</h3>
    `;

    // Reset input fields
    document.getElementById("pizzaSize").value = "small"; // Set default pizza size
    document.getElementById("toppings").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("Number").value = "";
    document.getElementById("Payment").value = "";
}



function resetingData() {
    const anotherOrder = document.getElementById("orderData");
    anotherOrder.innerHTML = ""; 
}




