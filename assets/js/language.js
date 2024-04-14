document.addEventListener("DOMContentLoaded", function () {
    // Define un objeto para almacenar los textos traducidos
    var translatedTexts = {};
  
    // Carga el JSON del idioma predeterminado (es.json)
    loadLanguage("es");
  
    // Agrega un event listener al icono de cambio de idioma
    document
      .querySelector(".change-language")
      .addEventListener("click", function () {
        // Cambia el idioma entre 'es' y 'en'
        var newLanguage = document.documentElement.lang === "es" ? "en" : "es";
        loadLanguage(newLanguage);
      });
  
    // Función para cargar el archivo JSON del idioma correspondiente
    function loadLanguage(language) {
      fetch(`/assets/js/${language}.json`)
        .then((response) => response.json())
        .then((data) => {
          translatedTexts = data;
          document.documentElement.lang = language;
          updateTexts();
        })
        .catch((error) => console.error("Error cargando el idioma:", error));
    }
  
    // Función para actualizar los textos en la página
    function updateTexts() {
      // Selecciona todos los elementos que necesitan ser traducidos
      var elements = document.querySelectorAll("[data-i18n]");
  
      // Imprimir el contenido completo de translatedTexts.profile en la consola
    //   console.log("Contenido de translatedTexts.profile:", translatedTexts.profile);
  
      elements.forEach(element => {
        var key = element.getAttribute("data-i18n");
        // console.log("Clave buscada:", key);
        // Verificar si translatedTexts.profile existe
        if (translatedTexts.profile) {
          // Verificar si la clave actual está presente en translatedTexts.profile
          if (translatedTexts.profile.hasOwnProperty(key)) {
            // Si la clave está presente, actualiza el texto del elemento
            element.innerHTML = translatedTexts.profile[key];
          } else if (key === "profile.job") {
            // Si la clave es "profile.job" y no está presente, intenta actualizar el trabajo directamente
            var jobElement = document.querySelector(".profile__profession");
            if (jobElement) {
              jobElement.innerHTML = translatedTexts.profile.job;
            }
          } else {
            // Si la clave no está presente, deja el texto sin cambios
            console.warn(`La clave '${key}' no está presente en translatedTexts.profile`);
          }
        }
      });
    }  
  });
  