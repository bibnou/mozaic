// === Animation des packs ===
function toggleDetails(el) {
  el.classList.toggle('active');
}

// === Gestion du message de confirmation Netlify ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form[name='inscription']");
  const feedback = document.getElementById("feedback");

  if (!form) return;

  form.addEventListener("submit", function () {
    // ✅ On laisse Netlify gérer l'envoi (PAS de preventDefault)
    // ✅ On affiche un message de confirmation immédiat
    feedback.textContent = "Merci ! Votre inscription a bien été envoyée ✅";
    feedback.style.color = "#007aff";

    // ✅ On reset le formulaire après un petit délai
    setTimeout(() => {
      form.reset();
    }, 300);
  });
});