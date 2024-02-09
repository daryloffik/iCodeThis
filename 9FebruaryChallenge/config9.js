function addBorder(){
    let home =document.querySelector(".home");
    setTimeout(()=> {
        home.classList.add("bordered")
    },1000)
}

addBorder()