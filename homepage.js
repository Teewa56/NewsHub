document.getElementById("open").onclick=()=>{ 
    document.getElementById("news-dropdown").style.height = "300px";
    document.getElementById("open").style.display = "none";    
    document.getElementById("close").style.display = "inline";  
}
document.getElementById("close").onclick=()=>{ 
    document.getElementById("news-dropdown").style.height = "0";
    document.getElementById("close").style.display = "none";    
    document.getElementById("open").style.display = "inline";    
}
const height = document.getElementById("news-dropdown");
if (height.style.height = "0"){
    document.getElementById("close").style.display = "none";    
}
document.getElementById("open1").onclick=()=>{ 
    document.getElementById("news-side-drop").style.display = "block";
    document.getElementById("open1").style.display = "none";    
    document.getElementById("close1").style.display = "inline";  
}
document.getElementById("close1").onclick=()=>{ 
    document.getElementById("news-side-drop").style.display = "none";
    document.getElementById("close1").style.display = "none";    
    document.getElementById("open1").style.display = "inline";    
}
const height2= document.getElementById("news-side-drop");
if (height2.style.display = "none"){
    document.getElementById("close1").style.display = "none";    
}
document.getElementById("menu").onclick=()=>{
    document.getElementById("sidebar").style.width = "100%";
}
document.getElementById("side-close").onclick=()=>{
    document.getElementById("sidebar").style.width = "0";
}




function submitComment(){
    console.log("clicked");
    const comment_input = document.getElementById("comment-input");
    const input_name = document.getElementById("input-text");

    document.getElementById("comment-name").innerHTML = input_name;
    document.getElementById("comment-out").innerHTML = comment_input;
}