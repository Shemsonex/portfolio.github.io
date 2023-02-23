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

var fileName = location.href.split("/").slice(-1); 

let blogs = document.getElementById('blogs');
let img = document.getElementById('img');
let blogTitle = document.getElementById('blogTitle');
let blogcard = document.getElementById('blog-card');
let anchor = document.getElementById('anchor');

// console.log(fileName[0])
if(fileName[0]==='login.html'){
  let logincard = document.getElementById('login-card');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let loginbtn = document.getElementById('loginbtn');
  let loginmsg = document.getElementById('login-msg');
  loginbtn.addEventListener('click', loginfunc);

  function loginfunc(){
    // console.log(email.value+'--'+password.value)
    async function postData(url = '', data = {}) {    
      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },      
        body: JSON.stringify(data) 
      });
      return response.json(); 
    }
      
    postData('http://127.0.0.1:8000/api/users/auth/login', { email: email.value, password: password.value })
      .then((data) => {
        console.log(data);       
        if(data.Error){
          loginmsg.innerHTML=data.Error
        }else{
          loginmsg.innerHTML=data.message        
          setTimeout(Redirect(), 10000);        
        }
      });
      function Redirect(){
        window.location.href = "dashboard.html";
      }
  }
}else{
  let postblogtitle = document.getElementById('post-blog-title');
  let postblogimage = document.getElementById('post-blog-image');
  let postblogcontent = document.getElementById('div_editor1');
  let postblogcategory = document.getElementById('post-blog-category');
  let postblogbtn = document.getElementById('post-blog-btn');
  postblogbtn.addEventListener('click', blogfunc);

  function blogfunc(){
    // console.log(postblogtitle.value+'--'+postblogimage.value+'--'+postblogcontent.value+'--'+postblogcategory.value)
    async function postBlog(url = '', blog = {}) {    
      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },      
        body: JSON.stringify(blog) 
      });
      return response.json(); 
    }
    
    postBlog('http://127.0.0.1:8000/api/blogs', { title: postblogtitle.value, category: postblogcategory.value , content: postblogcontent.value })
      .then((blog) => {
        console.log(blog); 
        // if(blog.Error){
        //   loginmsg.innerHTML=blog.Error
        // }else{
        //   loginmsg.innerHTML=blog.message
        //   window.location.href = "dashboard.html";
        // }
      });
  }
}


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