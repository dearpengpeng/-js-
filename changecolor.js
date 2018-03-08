window.onload=function(){
    var Olink=document.getElementsByTagName("link")[0];
    var Oski=document.getElementById("skin");
    var Oskin=Oski.getElementsByTagName("li");
    for(var i=0;i<Oskin.length;i++){
        Oskin[i]=i;
        Oskin[i].onclick=function(){
            Olink["href"]=this.id+".css";
        }
    }  
}

