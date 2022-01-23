const accordeon = () => {
  const chItem = document.querySelectorAll(".characteristics__item");
  const arrContent = document.querySelectorAll('.characteristics__description');
  const arrButton = document.querySelectorAll('.characteristics__title');

  chItem.forEach((item) => {
    const chButton = item.querySelector(".characteristics__title");
    const chContent = item.querySelector(".characteristics__description");

    chButton.addEventListener("click", (evt) => {
      if (chContent.classList.contains("open")) {
        chContent.style.height = "";
      } else {
        arrContent.forEach((element) => {
          element.style.height = "";
          element.classList.remove('open');
        })
        arrButton.forEach((element) => {
          element.classList.remove('active')
        })
        chContent.style.height = chContent.scrollHeight + "px";
      }
      chButton.classList.toggle('active');
      chContent.classList.toggle("open");
    });
  });
};
accordeon();
