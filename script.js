

window.addEventListener('scroll',()=>{
    const Header = document.getElementById("Header");
    let Scroll = window.pageYOffset;
    if(Scroll>=40 && Header.classList.contains("OnTop"))
        Header.classList.remove("OnTop");   
    else if(!Header.classList.contains("OnTop") && Scroll<40)
        Header.classList.add("OnTop"); 
});