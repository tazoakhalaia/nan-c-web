i18next.init(
  {
    lng: "en",
    resources: {
      en: {
        translation: {
          main_text: "Home",
          abouts_text: "About Us",
          our_team_text: "Our Team",
          history_text: "History",
          goal_text: "Goal",
          values_text: "Values",
          tour_text: "Tours",
          contact_text: "Contact",
          individual_team_text: "Individual",
          group_team_text: "Group",
        },
      },
      es: {
        translation: {
          main_text: "Inicio",
          abouts_text: "Sobre Nosotros",
          our_team_text: "Nuestro Equipo",
          history_text: "Mision",
          goal_text: "Vision",
          values_text: "Valores",
          tour_text: "Tour",
          contact_text: "Contacto",
          individual_team_text: "Individual",
          group_team_text: "Grupo",
        },
      },
    },
  },
  function (err, t) {
    updateText();
  }
);

function updateText() {
  document.getElementById("main_text").innerText = i18next.t("main_text");
  document.getElementById("abouts_text").innerText = i18next.t("abouts_text");
  document.getElementById("our_team_text").innerText =
    i18next.t("our_team_text");
  document.getElementById("history_text").innerText = i18next.t("history_text");
  document.getElementById("goal_text").innerText = i18next.t("goal_text");
  document.getElementById("values_text").innerText = i18next.t("values_text");
  document.getElementById("tour_text").innerText = i18next.t("tour_text");
  document.getElementById("contact_text").innerText = i18next.t("contact_text");
  document.getElementById("individual_team_text").innerText = i18next.t(
    "individual_team_text"
  );
  document.getElementById("group_team_text").innerText =
    i18next.t("group_team_text");
}

function changeLanguage(lang) {
  i18next.changeLanguage(lang, updateText);
}
