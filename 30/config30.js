function showMessage(){

 setTimeout(() => {
    let notif = document.querySelector(".notif")
    notif.classList.add("bell")
    let message = document.querySelector(".message")
     notif.addEventListener("click",()=>{
        message.classList.add("active")
        message.innerHTML =`<div class="w-60 h-32 bg-[#ffc2e8] rounded-lg">

        </div>`
        
        setTimeout(() => {
            
            message.classList.add("reactive")
        message.innerHTML +=`
        <div class="p-2 bg-white rounded-lg absolute  ml-20 mt-14  shadow-lg">
            <h1 class="p-2 font-semibold">You have 1 new message </h1>
            <div class="flex flex-row gap-2 p-3">
              <div class="bg-[#ffc2e8] p-2 flex items-center justify-center w-fit h-fit rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-pink-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  
              </div>
              <div class="">
                <b class="text-sm">Feb 22</b>
                <p class="text-[15px]">If you like what we do please tell your friends and share</p>
                <div class="flex flex-row p-2 gap-2">
                    <button class="flex flex-row items-center justify-center p-2 rounded-full border-2 border-cyan-500 w-full group hover:bg-cyan-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter fill-white stroke-blue-950 group-hover:mr-2 hover:transition hover:duration-500 z-20 group-hover:fill-blue-500" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
                      </svg>
                      <p class="hidden group-hover:inline z-0 group-hover:text-white  hover:transition hover:duration-500">Twitter</p>
                     </button>
                      <button class="flex flex-row items-center justify-center p-2 rounded-full border-2 border-blue-500  w-full group hover:bg-blue-900"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook group-hover:mr-2 hover:transition hover:duration-500 z-20 group-hover:fill-white" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                      </svg><p class="hidden group-hover:inline z-0 group-hover:text-white  hover:transition hover:duration-500">Facebook</p></button>
                  </div>
              </div>
            
            </div>
        </div>`
        notif.classList.remove("bell")
        },1000);
     })    
},2000)
}

showMessage()