const menuBtn = document.getElementById("ham-btn");
const nav = document.getElementById("nav");
const headerHam = document.getElementById("header-hamb");
const section3 = document.getElementById("sec3");
const footerActive = document.getElementById("footer-active");
const hidden = document.body;
// const header = document.getElementById('head');


menuBtn.addEventListener('click',function(){
  nav.classList.toggle('active')
  menuBtn.classList.toggle('active')
  headerHam.classList.toggle('active')
  section3.classList.toggle('active')
  footerActive.classList.toggle('active')
  hidden.classList.toggle('active')
//   header.classList.toggle('active')

})

  

