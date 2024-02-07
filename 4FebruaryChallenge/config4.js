function show() {
    let homeButton = document.querySelector(".HomeButton");
    let home = document.querySelector(".home");

    console.log("homeButton:", homeButton);
    console.log("home:", home);

    homeButton.addEventListener("click", () => {
        home.classList.add("active");
        console.log("added");
    });
}

show();
