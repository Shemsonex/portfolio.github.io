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

  // initExperienceSection();

  let like = document.getElementById('like');
  like.addEventListener('click',addlike);

  function addlike() {
    let num1 = document.getElementById('num1').innerHTML;
    num1++;    
    let num11 = document.getElementById('num1').innerText;
    num11 = num1;
  }  
});

let blogs = document.getElementById('blogs');
let img = document.getElementById('img');
let blogTitle = document.getElementById('blogTitle');
let blogcard = document.getElementById('blog-card');
let anchor = document.getElementById('anchor');
// let myform = document.getElementById('myform');

  fetch('http://127.0.0.1:8000/api/blogs')
.then((response) => response.json())
.then((data) => 
data.forEach((b) => {
  // console.log(b); 
  blogs.innerHTML +=  `<div id="blog-card" class="blog-card"><a id="anchor" href="singleblog.html">                          
      <img id="img" src="`+b.image+`" alt="" class="imgblogs">                            
      <p id="blogTitle">`+b.title+`</p> </a>                               
   </div>`     
}),
// blogs.innerHTML = JSON.stringify(data)
);

function myform(e){
  alert(e)
  e.preventDefault()
  console.log(e)
}