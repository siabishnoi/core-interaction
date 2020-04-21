document.getElementById("img1").onclick=function(){
	document.getElementById("ray").style.color='#33cc33';
	
}
document.getElementById("img3").onclick=function(){
	document.getElementById("francene").style.color='#33cc33';
}
document.getElementById("img2").onclick=function(){
	document.getElementById("kathy").style.color='red';
}
document.getElementById("img4").onclick=function(){
	document.getElementById("weird").style.color='red';
}
document.getElementById("img5").onclick=function(){
	document.getElementById("gun").style.color='red';
	
}
document.getElementById("img6").onclick=function(){
	document.getElementById("knife").style.color='#33cc33';
}
document.getElementById("img7").onclick=function(){
	document.getElementById("choke").style.color='#33cc33';
}
document.getElementById("img8").onclick=function(){
	document.getElementById("rope").style.color='red';
}
var breakPoint = 375;

var boxes = document.querySelectorAll('.images');

if (window.innerWidth < breakPoint) {
  window.addEventListener('scroll', () => {
    boxes.forEach(images => {
      var showItemAt = window.innerHeight + window.scrollY - images.offsetHeight;
      if (showItemAt > images.offsetTop) {
        images.classList.add('appear');
      } else {
        images.classList.remove('appear');
      }
    });
  });
} else {
  console.log('big screen');
  boxes.forEach(images => {
    images.classList.add('fade-in');
  });
}