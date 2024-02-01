const navid = ["home", "ab_me", "skill", "potfolio", "contacts"];

const lang = {
  ru: {
    navigation_link: ["Дом", "Обо мне", "Навыки", "Портфолио", "Контакты"],
    port_proj_name: [
      "Главная страница интернет-магазина модной одежды",
      "Магазин Reebok — концепция",
      "Загрузочная страница Braun — концепция",
    ],
    cont_name: ["Обо мне", "Навыки", "Портфолио", "Контакты"],
    name: ["Вталатий"],
    descr: ["HTML-программист<br />24 года, Пенза"],
    abzac: [
      "Здравствуйте, я Вталатий - HTML-программист из Пензы.<br />Интересуюсь программами и всем, что с ними связано.",
      `Учусь на курсах "Web development" в Skysmart`,
      "Готов реализовывать отличные проекты<br />с замечательными людьми.",
    ],
    skill_descr: ["Я работаю в таких программах как:"],
    contacts_descr: [
      "Хотите узнать больше или просто пообщаться?<br />Добро пожаловать!",
    ],
    contacts_but: ["Отправить сообщение"],
    footer_descr: ["Лайкни меня в<br />Linkedin, Instagram, Behance, Dribble"],
  },

  eng: {
    navigation_link: ["Home", "About me", "Skills", "Portfolio", "Contacts"],
    port_proj_name: [
      "Online fashion store Homepage",
      "Reebok Store - Concept",
      "Braun Landing Page - Concept",
    ],
    cont_name: ["About me", "Skills", "Portfolio", "Contacts"],
    name: ["Vtalatiy"],
    descr: ["HTML programer<br />24 years old, Penza"],
    abzac: [
      "Hi, I'm Vtalatiy - HTML programer from Penza.<br />I'm interested in programm and everything connected with it.",
      `I'm studying at courses "Web development" in Skysmart.`,
      "Ready to implement excellent projects<br />with wonderful people.",
    ],
    skill_descr: ["I work in such programs as:"],
    contacts_descr: ["Want to know more or just chat?<br />You are welcome!"],
    contacts_but: ["Send message"],
    footer_descr: ["Like me on<br />Linkedin, Instagram, Behance, Dribble"],
  },
};






replaceLanguage(localStorage.getItem("keyid") || "eng");


function replaceLanguage(key) {
  for (selector in lang[key]) {
    document.querySelectorAll(`.${selector}`).forEach((item, index) => {
      item.innerHTML = lang[key][selector][index];
    });
  }
  document.querySelectorAll(`.language`).forEach((item) => {
    item.classList.remove("lang_toggle");
  });
  document.querySelector(`#${key}`).classList.add("lang_toggle");
}


document.querySelector(".lang").addEventListener("click", (event) => {
  localStorage.setItem("keyid", `${event.target.id}`);
  replaceLanguage(`${event.target.id}`);
});














window.addEventListener("scroll", (event) => {
  for (const david of navid) {
    const offsetY = document.querySelector(`#${david}`).offsetTop;

    if (offsetY <= window.scrollY + 500) {
      navid.map((davidDva) =>
        document.querySelector(`#${davidDva}_link`).classList.remove("glow")
      );

      document.querySelector(`#${david}_link`).classList.add("glow");
    }

    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.offsetHeight
    ) {
      navid.map((davidTri) =>
        document.querySelector(`#${davidTri}_link`).classList.remove("glow")
      );

      document.querySelector(`#contacts_link`).classList.add("glow");
    }
  }

});
document.querySelector(".burger").addEventListener("click",(event) => {
  event.target.closest(".navigation").classList.toggle("navActiv")
  document.querySelector(".lang").classList.toggle("lang_mobile")
}
)