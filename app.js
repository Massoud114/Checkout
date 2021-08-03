$(function () {
  document.querySelectorAll(".payment-method").forEach((item) => {
    item.addEventListener("click", (event) => {
      document.getElementById("payment-choice").classList.add("hidden");
      document
        .getElementById("payment-choice-title")
        .classList.remove("active");

      document.getElementById("checkout-form").classList.remove("hidden");
      document.getElementById("payment-title").classList.add("active");
    });
  });

  $('#checkout-form').submit(function (e) { 
    e.preventDefault();
    window.location.href = "./success.html";
    


  });

});