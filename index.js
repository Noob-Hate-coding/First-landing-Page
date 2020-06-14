var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var para1 = document.querySelector("#paragraph1");
var para2 = document.querySelector("#paragraph2");
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
next.addEventListener("click",function(){
	img2.style.display = "block";
	img1.style.display = "none";
	para2.style.display = "block";	
	para1.style.display = "none";
	
});
prev.addEventListener("click",function(){
 	img1.style.display = "block";
 	img2.style.display = "none";
 	para2.style.display = "none";	
	para1.style.display = "block";
});
	