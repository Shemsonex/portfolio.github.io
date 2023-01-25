window.addEventListener("load", function () {


  function showMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "visible";
    nav.style.transform = "translateX(0vw)";
    document.querySelector("#mobile-menu-button").classList.add("is-active");
  }

  function hideMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "hidden";
    nav.style.transform = "translateX(100vw)";
    document.querySelector("#mobile-menu-button").classList.remove("is-active");
  }

  function toggleMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    if (nav.style.visibility === "visible") {
      hideMobileMenu();
    } else {
      showMobileMenu();
    }
  }

  function addLineBreak() {
    let isMobile = window.matchMedia("(max-width: 500px)").matches;
    let mobileLineBreak = "";

    if (isMobile) {
      mobileLineBreak = "<br />";
    } else {
      mobileLineBreak = "";
    }

    return mobileLineBreak;
  }


  function smoothScrollToCenter(elementId) {
    const el = document.getElementById(elementId);

    const position = elementId === "projects-section" ? "start" : "center";

    el.scrollIntoView({
      behavior: "smooth",
      block: position,
      inline: position,
    });
  }

  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".navLink")) {
        console.log(event.target.attributes[1].value);
        smoothScrollToCenter(event.target.attributes[1].value);
      }
    },
    false
  );

  document
    .querySelector("#mobile-menu-button")
    .addEventListener("click", toggleMobileMenu);

  document
    .querySelector("#mobile-nav-tap-close-background")
    .addEventListener("click", hideMobileMenu);

  let mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((el) => el.addEventListener("click", hideMobileMenu));

  initExperienceSection();
});
