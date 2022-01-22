const scrollFunc = () => {
  const headerLinks = document.querySelectorAll(".header-menu__item a");
  const linkCharacteristics = document.querySelector(
    ".card-details__link-characteristics"
  );

  seamless.polyfill();

  headerLinks.forEach((element) => {
    element.addEventListener("click", (evt) => {
      evt.preventDefault();
      smoothScroll(element);
    });
  });

  linkCharacteristics.addEventListener("click", (evt) => {
    evt.preventDefault();
    smoothScroll(linkCharacteristics);
  });

  let smoothScroll = function (element) {
    const id = element.getAttribute("href").substring(1);
    const section = document.getElementById(id);
    if (section) {
      seamless.elementScrollIntoView(section, {
        behavior: "smooth",
        block: "start",
      });
    }
  };
};

scrollFunc()