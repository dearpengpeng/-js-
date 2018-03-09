//
//   var gallery = document.getElementById("imagegallery");
//   var links = gallery.getElementsByTagName("a");
//   for(var i=0; i<links.length;i++){
//       links[i].onclick = function(){
//       var source = this.getAttribute("src");
//       var placeholder = document.getElementById("placeholder");
//       placeholder.setAttribute("src",source);
//       }
//   } 

 window.onload = function(){
   function showPic(a){
       var source = a.getAttribute("href");
       var placeholder = document.getElementById("placeholder");
       placeholder.setAttribute("src",source);
       var description = document.getElementById("description");
       var text = a.getAttribute("title")
       description.childNodes[0].nodeValue = text;
   }

   var gallery = document.getElementById("imagegallery");
   var links = gallery.getElementsByTagName("a");
   for(var i=0; i<links.length;i++){
       links[i].onclick = function(){
           showPic(this); 
           return false;
       }
   }
}

