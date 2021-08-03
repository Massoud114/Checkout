//document.getElementById("checkout-form").classList.add("hidden")

document.querySelectorAll(".payment-method").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.getElementById("payment-choice").classList.add("hidden");
    document.getElementById("payment-choice-title").classList.remove("active");
    
    document.getElementById("checkout-form").classList.remove("hidden");
    document.getElementById("payment-title").classList.add("active");
      
  });
});

let form = document.getElementById("checkout-form");

form.addEventListener("submit", function (e) {
  e.preventDefault()
  let formData = new FormData(Form);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
    window.location.href = "./success.html"
 })