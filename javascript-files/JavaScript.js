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

    // Visar resultatet på sidan
    document.getElementById("resultat").innerHTML =
        "Du fick " + poäng + " av 3 rätt!";
}
