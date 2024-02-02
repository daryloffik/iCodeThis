// Add JavaScript code here
function show() {
    document.addEventListener("DOMContentLoaded", (event) => {
        // Select the element with the class "notif"
        let message = document.querySelector(".message");
        let back = document.querySelector(".back");
        let front = document.querySelector(".front");
        // Check if the element was found
        if (message) {
            // Add the "active" class to the selected element
            back.classList.add("active");
            setTimeout(() => {

                front.classList.add("active")
                
                setTimeout(() => { 
                    front.classList.add("shadow")
                },1000)


            }, 1000);
        }
    })
}

show()