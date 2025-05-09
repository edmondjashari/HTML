document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");
  const messaggio = document.getElementById("messaggio-download");
  let downloadEseguito = false;

  logo.addEventListener("click", () => {
    // Anima il logo
    logo.classList.toggle("animato");

    // Scarica il file solo una volta
    if (!downloadEseguito) {
      const filePath = logo.getAttribute("data-download");
      if (filePath) {
        const link = document.createElement("a");
        link.href = filePath;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        downloadEseguito = true;

        // Mostra messaggio
        messaggio.classList.remove("nascosto");
        messaggio.classList.add("visibile");

        // Nasconde il messaggio dopo 4 secondi
        setTimeout(() => {
          messaggio.classList.remove("visibile");
          messaggio.classList.add("nascosto");
        }, 4000);
      }
    }
  });
});