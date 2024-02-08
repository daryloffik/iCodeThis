function show(){
    let view =document.querySelector(".view")
    let first =document.querySelector(".first")
    view.addEventListener("click", ()=> {
     first.classList.add("active")
  
    })
    
}

show()