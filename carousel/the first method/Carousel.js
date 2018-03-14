
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var index = 0;
function reset(){
    for ( var i=0; i < slides.length; i++){
        slides[i].style.display = "none"
        dots[i].style.background = ""
    }
}
function start(){
slides[0].style.display = "block";    
}
start();

next.onclick = function(){
    reset();
    if(index===slides.length-1){
    index=-1
    }
    slides[index+1].style.display = "block";
    index = index+1;}
prev.onclick = function(){
    reset();
    if(index===0){
    index=slides.length
    }
    slides[index-1].style.display = "block";
    index = index-1;}
for ( var i=0; i < slides.length; i++){
    dots[i].index = i;
    dots[i].onclick = function(){
    reset();
    slides[this.index].style.display = "block";
    this.style.background = "red"
    }
    
    
    
    
    
    
}


