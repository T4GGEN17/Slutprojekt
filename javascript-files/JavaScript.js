// Hämtar användarens svar och räknar poäng
function rättaQuiz() {
  let poäng = 0;

  // Hämtar valda svar från frågorna
  let q1 = document.querySelector('input[name="q1"]:checked');
  let q2 = document.querySelector('input[name="q2"]:checked');
  let q3 = document.querySelector('input[name="q3"]:checked');

  // Kontrollerar om svaren är rätt
  if (q1 && q1.value === "a") {
    poäng++;
  }
  if (q2 && q2.value === "b") {
    poäng++;
  }
  if (q3 && q3.value === "a") {
    poäng++;
  }

  // Visar resultatet på sidan med olika svar beroende på poängen man får
  let resultat = document.getElementById("resultat");

  if (poäng === 3) {
    resultat.innerHTML = "Du fick 3 av 3 rätt! <br> Snyggt gjort!";
  } else if (poäng === 2) {
    resultat.innerHTML = "Du fick 2 av 3 rätt! <br> Du kan göra bättre.";
  } else if (poäng === 1) {
    resultat.innerHTML = "Du fick 1 av 3 rätt! <br> ÖVA MER!";
  } else {
    resultat.innerHTML = "Du fick 0 av 3 rätt! <br> GE UPP!!!";
  }
}

// Filtrerar bort farliga tecken
function filterInput(input) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
// Kontrollerar att formuläret finns
let formulär = document.getElementById("formulär");
if (formulär) {
  formulär.addEventListener("submit", function (event) {
    event.preventDefault();
    let säkerText = document.getElementById("text").value;
    document.getElementById("xssResultat").innerHTML = "Du skrev: " + säkerText;
  });
}
