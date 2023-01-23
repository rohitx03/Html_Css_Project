let headserch = document.getElementById("head-sicon");
let serchbar =document.getElementById("header-search");
serchbar.style.display = "none" 
headserch.addEventListener("click",function run(){
    // let serchbar =document.getElementById("header-search").style.display = "none";
    if(serchbar.style.display= "none"){
        serchbar.style.display = "block"
    }
    else if(serchbar.style.display= "block"){
        serchbar.style.display = "none"
    }
    else{
        serchbar.style.display = "none"
    }
});