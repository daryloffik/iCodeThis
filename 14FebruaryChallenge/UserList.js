function changeUser(){
    let criters =document.querySelectorAll(".criter")
    let profile1 = document.querySelector(".profile1")
    let profile2 = document.querySelector(".profile2")
    let profile3 = document.querySelector(".profile3")
    let profile4 = document.querySelector(".profile4")
    let profile5 = document.querySelector(".profile5")
    let profile6 = document.querySelector(".profile6")
let Userlist = document.querySelector(".userList") 
    criters.forEach(criter => {
        criter.addEventListener("click",()=> {
        switch(criter.innerText){
            case "Reputation":
            
                Userlist.innerHTML =` <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2 profile1 scaled1">
                <img src="https://plus.unsplash.com/premium_photo-1668485966810-bcaa10f47781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="" class="rounded-full scaled1 w-20 h-20 ">
              <div>
                <h4 class="text-lg ">Leyla Nichols</h4>
                <p class="text-start text-sm">Troy,Mi</p>
                <div class="mt-2">
                    <div class="flex flex-row gap-1">
                        <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">clothes</p>
                        <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">stern</span>
                    </div>
                </div>
       
              </div>
    
            </div>
            <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2  profile2 scaled1">
                <img src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="rounded-full scaled1 w-20 h-20 ">
              <div>
                <h4 class="text-lg ">Jesus Weiss</h4>
                <p class="text-start text-sm">Fort Worth,TX</p>
                <div class="mt-2">
                    <div class="flex flex-row gap-1">
                        <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">headset</p>
                        <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">gadget</span>
                    </div>
                    <div class="flex flex-row gap-1 mt-2">
                        <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">speed</p>
                        <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">winter</span>
                    </div>
                </div>
       
              </div>
              `
                break;
                case "New Users":

                Userlist.innerHTML = `
                <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2  profile3 scaled1">
                <img src="https://images.unsplash.com/photo-1621525278689-4779d647a9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" class="rounded-full scaled1 w-20 h-20 ">
              <div>
                <h4 class="text-lg ">Annie Rice</h4>
                <p class="text-start text-sm">Austin,TX</p>
                <div class="mt-2">
                    <div class="flex flex-row gap-1">
                        <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">road</p>
                        <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">mountain</span>
                        <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">Trip</span>
                    </div>
                    <div class="flex flex-row gap-1 mt-2">
                        <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">earth</p>
                        <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">nature</span>
                    </div>
                </div>
       
              </div>
    
            </div>
            <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2  profile4 scaled1">
                <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="rounded-full scaled1 w-20 h-20 ">
              <div>
                <h4 class="text-lg ">Robert Crowner</h4>
                <p class="text-start text-sm">Cincinnati,OH</p>
                
                <div class="mt-2">
                    <div class="flex flex-row gap-1">
                        <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">Maintenace</p>
                        <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">gear</span>
                    </div>
                    <div class="flex flex-row gap-1 mt-2">
                        <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">frame</p>
                        <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">repair</span>
                    </div>
                </div>
       
              </div>
    
            </div>
            <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2  profile5 scaled1">
                <img src="https://images.unsplash.com/photo-1650389176833-8dbb23d0d8f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" alt="" class="rounded-full scaled1 w-20 h-20 ">
              <div>
                <h4 class="text-lg ">Amy Campbell</h4>
                <p class="text-start text-sm">Warrior,AL</p>
                <div class="mt-2">
                    <div class="flex flex-row gap-1">
                        <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">music</p>
                        <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">disks</span>
                    </div>
                </div>
       
              </div> `;
              
                    break;
                    case "Voters":

                    Userlist.innerHTML =`
                    <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2 profile1 scaled1">
            <img src="https://plus.unsplash.com/premium_photo-1668485966810-bcaa10f47781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="" class="rounded-full scaled1 w-20 h-20 ">
          <div>
            <h4 class="text-lg ">Leyla Nichols</h4>
            <p class="text-start text-sm">Troy,Mi</p>
            <div class="mt-2">
                <div class="flex flex-row gap-1">
                    <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">clothes</p>
                    <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">stern</span>
                </div>
            </div>
   
          </div>

        </div>
                    <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2  profile6 scaled1">
                    <img src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" class="rounded-full scaled1 w-20 h-20 ">
                  <div>
                    <h4 class="text-lg ">Anthony S. Morin</h4>
                    <p class="text-start text-sm">Lyndhurst,NJ</p>
                    <div class="mt-2">
                        <div class="flex flex-row gap-1">
                            <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">vintage</p>
                            <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">electric</span>
                        </div>
                    </div>
           
                  </div>
        
                </div>`;
               
                        break;
                        case "Editors":

                        Userlist.innerHTML = ` <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2 profile1 scaled1">
                        <img src="https://plus.unsplash.com/premium_photo-1668485966810-bcaa10f47781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="" class="rounded-full scaled1 w-20 h-20 ">
                      <div>
                        <h4 class="text-lg ">Leyla Nichols</h4>
                        <p class="text-start text-sm">Troy,Mi</p>
                        <div class="mt-2">
                            <div class="flex flex-row gap-1">
                                <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">clothes</p>
                                <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">stern</span>
                            </div>
                        </div>
               
                      </div>
            
                    </div>
                    <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2  profile2 scaled1">
                        <img src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="rounded-full scaled1 w-20 h-20 ">
                      <div>
                        <h4 class="text-lg ">Jesus Weiss</h4>
                        <p class="text-start text-sm">Fort Worth,TX</p>
                        <div class="mt-2">
                            <div class="flex flex-row gap-1">
                                <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">headset</p>
                                <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">gadget</span>
                            </div>
                            <div class="flex flex-row gap-1 mt-2">
                                <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">speed</p>
                                <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">winter</span>
                            </div>
                        </div>
               
                      </div>
            
                    </div>
                    <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2  profile3 scaled1">
                        <img src="https://images.unsplash.com/photo-1621525278689-4779d647a9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" class="rounded-full scaled1 w-20 h-20 ">
                      <div>
                        <h4 class="text-lg ">Annie Rice</h4>
                        <p class="text-start text-sm">Austin,TX</p>
                        <div class="mt-2">
                            <div class="flex flex-row gap-1">
                                <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">road</p>
                                <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">mountain</span>
                                <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">Trip</span>
                            </div>
                            <div class="flex flex-row gap-1 mt-2">
                                <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">earth</p>
                                <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">nature</span>
                            </div>
                        </div> `;
                   
                            break;
                            case "Moderators":

                           
                          Userlist.innerHTML=`  <div class=" flex flex-row items-start justify-start font-medium rounded-lg  gap-2 bg-slate-100 p-5 pb-10 hover:shadow-lg transition duration-500 hover:border-2  profile6 scaled1">
                          <img src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" class="rounded-full scaled1 w-20 h-20 ">
                        <div>
                          <h4 class="text-lg ">Anthony S. Morin</h4>
                          <p class="text-start text-sm">Lyndhurst,NJ</p>
                          <div class="mt-2">
                              <div class="flex flex-row gap-1">
                                  <p class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center">vintage</p>
                                  <span class="ring-2 px-2 rounded-full ring-indigo-400 w-fit text-indigo-400  text-sm items-center justify-center ml-1">electric</span>
                              </div>
                          </div>
                 
                        </div>
              
                      </div>`
                                break;
        }
       
        })
    });
}


changeUser()