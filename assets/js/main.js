/*========== AFFICHER CACHÉ - MOT DE PASSE ==========*/
/*========== SHOW HIDDEN - PASSWORD ==========*/
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    // Changer le mot de passe en texte
    // Change password to text
    if (input.type === "password") {
      // Passer au texte
      // Switch to text
      input.type = "text";
      // Changement d'icône
      // Icon change
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      // Changement de mot de passe
      // Change to password
      input.type = "password";

      // Icon change
      // Changement d'icône
      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

showHiddenPass("login-pass", "login-eye");
