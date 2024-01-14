document.addEventListener("DOMContentLoaded", function () {
  // Get the select element and image element
  var selectTujuan = document.getElementById("tujuan");
  var imgElement = document.querySelector(".container img");

  // Add event listener to the select element
  selectTujuan.addEventListener("change", function () {
    // Get the selected option value
    var selectedTujuan = selectTujuan.value;

    // Add fade-out class to the image
    imgElement.classList.add("fade-out");

    // Set a timeout to change the image source after the fade-out effect
    setTimeout(function () {
      imgElement.src = "Image/" + selectedTujuan + ".png";

      // Trigger reflow to apply the fade-in effect again
      void imgElement.offsetWidth;

      // Remove the fade-out class
      imgElement.classList.remove("fade-out");

      // Add fade-in class for the fade-in effect
    }, 300); // Adjust the timeout value according to your transition duration
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const formNameInput = document.getElementById("name");
  const formTicketInput = document.getElementById("ticket");
  const formDestinationSelect = document.getElementById("tujuan");
  const formMemberSelect = document.getElementById("member");
  const outputPriceInput = document.getElementById("ticket-price");
  const outputSubtotalInput = document.getElementById("subtotal");
  const outputDiscountInput = document.getElementById("discount");
  const outputTotalInput = document.getElementById("total");
  const submitButton = document.querySelector(".button-container button[type='submit']");
  const resetButton = document.querySelector(".button-container button[type='reset']");

  // Destination prices
  const destinationPrices = {
    Lombok: 1000000,
    Bangkok: 5000000,
    Borobudur: 500000,
    Japan: 9000000,
    Palembang: 500000,
    Bali: 3000000,
  };

  // Add event listener to the submit button
  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const userName = formNameInput.value;
    const selectedDestination = formDestinationSelect.value;
    const numberOfTickets = parseInt(formTicketInput.value, 10) || 0;
    const selectedMember = formMemberSelect.value;

    // Calculate ticket price
    const ticketPrice = destinationPrices[selectedDestination] || 0;
    outputPriceInput.value = ticketPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

    // Calculate subtotal
    const subtotal = ticketPrice * numberOfTickets;
    outputSubtotalInput.value = subtotal.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

    // Calculate discount for premium members
    const discountRate = selectedMember === "Premium" ? 0.1 : 0;
    const discount = subtotal * discountRate;
    outputDiscountInput.value = discount.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

    // Calculate total
    const total = subtotal - discount;
    outputTotalInput.value = total.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  });

  // Add event listener to the reset button
  resetButton.addEventListener("click", function () {
    // Reset all inputs and outputs
    formNameInput.value = "";
    formTicketInput.value = "";
    formDestinationSelect.value = "Lombok";
    formMemberSelect.value = "Basic Member";
    outputPriceInput.value = "";
    outputSubtotalInput.value = "";
    outputDiscountInput.value = "";
    outputTotalInput.value = "";
  });
});

