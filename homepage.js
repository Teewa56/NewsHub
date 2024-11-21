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


const commentList = document.getElementById("comments-list");
const commentButton = document.getElementById("comment-button");
const commentInput = document.getElementById("comment-input");
const userNameInput = document.getElementById("input-text");

let comments = [];
let userHasCommented = false;


commentButton.addEventListener('click', ()=>{
    const userName = userNameInput.value.trim();
    const comment = commentInput.value.trim();

    if (!comment || !userName){
        document.getElementById("warning").innerHTML = "Enter your name and comment!";
        return;
    }

    if(userHasCommented){
        document.getElementById("warning").innerHTML = "you can only comment once";
        return;
    }

    const newComment = { userName, comment};
    comments.push(newComment);
    userHasCommented = true;

    displayComments();
    userNameInput.value = " ";
    commentInput.value = " ";
});

function displayComments(){
    commentList.innerHTML = " ";
    var x = new Date();
    comments.forEach((c) => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add("comments");
        commentDiv.innerHTML = `<h1>${c.userName}</h1> <p>${c.comment}</p><p>${x}</p> `;
        commentList.appendChild(commentDiv);
    });
}


function showArticle(index){
    const articleTitle = document.getElementById("article-title");
    const articleContent = document.getElementById("article-content");

    articleTitle.textContent = Articles[index].Title;
    articleContent.textContent = Articles[index].content;
}