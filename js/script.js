//toggle class aktive
const navbarNav = document.querySelector('.navbar-nav');
//ketika menu di klik
document.querySelector('#menu').
onclick = () =>{
    navbarNav.classList.toggle('active')
}
//klik luar side bar
const menu1= document.querySelector('#menu');
document.addEventListener('click', function(e){
    if(!menu1.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
}) 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mynavbar").style.top = "0";
  } else {
    document.getElementById("mynavbar").style.top = "-80px"; /* Sesuaikan dengan tinggi header Anda */
  }
  prevScrollpos = currentScrollPos;
};
