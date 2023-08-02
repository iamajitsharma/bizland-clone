(function () {
  "use strict";
  const select = (el, all = false) => {
    el = el.trim();

    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  console.log(document);
  //Back To Top
  let backtotop = select(".back-to-top");

  const toggleBacktotop = () => {
    if (window.scrollY >= 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };

  window.addEventListener("load", toggleBacktotop);
  window.addEventListener("scroll", toggleBacktotop);

  //Preloader
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  //Animation ON Scroll
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: "true",
      mirror: false,
    });
  });
})();
