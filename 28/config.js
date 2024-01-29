function ChangeColor() {
  let element0 = document.getElementById("s-0");
  let element1 = document.getElementById("s-1");
  let element2 = document.getElementById("s-2");
  let element3 = document.getElementById("s-3");

  element0.addEventListener("mouseover", () => {
    if (document.body.classList.contains("follow1") ) {
      document.body.classList.remove("follow1")
    } else if (document.body.classList.contains("follow2") ) {
      document.body.classList.remove("follow2")
    } else if (document.body.classList.contains("follow3") ) {
      document.body.classList.remove("follow3")
    }

    document.body.classList.add("follow")
 
    console.log("added")

 
});

element1.addEventListener("mouseover", () => {
  if (document.body.classList.contains("follow") ) {
    document.body.classList.remove("follow")
  } else if (document.body.classList.contains("follow2") ) {
    document.body.classList.remove("follow2")
  } else if (document.body.classList.contains("follow3") ) {
    document.body.classList.remove("follow3")
  }

  document.body.classList.add("follow1")

  console.log("added")


 });

 element2.addEventListener("mouseover", () => {
  if (document.body.classList.contains("follow") ) {
    document.body.classList.remove("follow")
  } else if (document.body.classList.contains("follow1") ) {
    document.body.classList.remove("follow1")
  } else if (document.body.classList.contains("follow3") ) {
    document.body.classList.remove("follow3")
  }

  document.body.classList.add("follow2")

  console.log("added")


 });

 element3.addEventListener("mouseover", () => {
  if (document.body.classList.contains("follow") ) {
    document.body.classList.remove("follow")
  } else if (document.body.classList.contains("follow1") ) {
    document.body.classList.remove("follow1")
  } else if (document.body.classList.contains("follow2") ) {
    document.body.classList.remove("follow2")
  }

  document.body.classList.add("follow3")

  console.log("added")


 });


}

ChangeColor();
