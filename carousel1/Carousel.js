//var text = document.getElementById("text");
var myslides = document.getElementById("mySlides");
var dots = document.getElementsByClassName("dot");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var index = 1;
var total = 3;

var image = document.createElement("img");
var text = document.createElement("p");

myslides.appendChild(image);
myslides.appendChild(text);
var text2 = document.createTextNode("Caption Text 1");
text.appendChild(text2);
text.setAttribute("id","text");


//text.parentNode.insertBefore(image,text);
image.setAttribute("src","img1.jpg")
function slide(n){
    index = index + n;
    if (index < 1){
        index = total
    }
    if (index > total){
        index = 1 }
    image.setAttribute("src","img"+index+".jpg");
    text.childNodes[0].nodeValue="Caption Text"+index;
}
next.onclick = function() {slide(1);}
prev.onclick = function() {slide(-1);}





