

let myId = 0;

// const yesterdayTask = document.querySelector("yesterday-task");
// const importantTask = document.querySelector("important-task");
// const archiveTask = document.querySelector("archive-task");
// const completedTask = document.querySelector("completed-task");
// console.log(todayTask);
// console.log(completedTask);


const  submitBut = document.querySelector('#submit-new-task')
const  taskInput = document.querySelector(".task-input")
const  tasks = document.querySelector(".task")
const details = document.getElementById("details");
console.log(details);
const startDate = document.querySelector(".start-date");
console.log(startDate)
const endDate = document.querySelector(".end-date");
const detail = document.querySelector(".detail");
const todayTask = document.getElementById("today");
const yesterdayTask = document.getElementById("yesterday-task");
const importantTask = document.getElementById("important-task");
const archiveTask = document.getElementById("archive-task");
const completedTask = document.getElementById("completed-task");
let presentStartDate;
let presentInput;
let presentEndDate;
let  presentdetail
let checkbox = document.createElement("img")
let edit = document.createElement("img")
let subtodo = document.createElement("img")
let  delet = document.createElement("img")



const todos = JSON.parse(localStorage.getItem("todos")) || []
const addMyTodo = (name, myStartDate, myEndDate, todoDetail) =>{
    todos.push({
        name,
       myStartDate,
        myEndDate,
        todoDetail,
    });
localStorage.setItem("todos", JSON.stringify(todos));
return {name, myStartDate, myEndDate, todoDetail}
}

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) => {
  students.push({
    name,
    age,
    roll,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, roll };
};
  
c



function todoActions(task){
   const todoFunctions= document.createElement("div");
   todoFunctions.classList.add("actions")

   
   subtodo.setAttribute( "src", "images/arrow-long-right-c.svg");
   subtodo.classList.add("pe-3","pt-2");
   
   delet.src ="images/delete.svg";
   delet.classList.add("pe-3","pt-2", "delete-but", "hover-overlay")
  

   edit.setAttribute("src", "images/edit.svg");
   edit.classList.add("pe-3","pt-2")

   checkbox.setAttribute("src", "images/checkmark-circled.svg");
   checkbox.classList.add("pe-1" ,"pt-2")
   
   todoFunctions.appendChild(subtodo);
   todoFunctions.appendChild(delet);
   todoFunctions.appendChild(edit);
   todoFunctions.appendChild(checkbox);
   task.appendChild(todoFunctions);
   
}


 function addTodo(addInputContent){   
   let task= document.createElement("div")
   task.classList.add("myTask","d-flex","justify-content-between","mb-2", "rounded-2", "pe-3");
   const paddi= document.createElement("div")
   paddi.classList.add("ps-3", "myTask")
   const paragraph=document.createElement("p");
   paragraph.classList.add("pt-2");
   paragraph.textContent=addInputContent;
   presentInput = addInputContent;
   paddi.appendChild(paragraph);
   task.appendChild(paddi);

  todoActions(task)
   tasks.appendChild(task)
   taskInput.value = "";    
   addInputContent.value = "";
}

    // adding date and details

function addDetails(startDateContent, endDateContent, detailContent ){

    const myDetails = document.createElement("div")
    const myDetail = document.createElement("p")
    myDetail.classList.add("mb-2", "fs-6", "fw-bold");
    myDetail.innerHTML= ("DETAILS")
    myDetails.appendChild(myDetail);

    const detailText  = document.createElement("p")
    detailText.classList.add("mb-2", "pe-4", "fs-6")
    detailText.textContent = detailContent;
     presentdetail = detailContent;
  
    const divDate = document.createElement("div");
    divDate.classList.add("time-track","d-flex","justify-content-between");
    
    const start = document.createElement("div");
    const startDateSpan = document.createElement("span");
    startDateSpan.classList.add("pe-2")
    const dateText = document.createElement("span");
    const clock = document.createElement("img");
    clock.src ="images/sand-clock 1.svg"
    startDateSpan.appendChild(clock);
    dateText.textContent = startDateContent;
    presentStartDate = startDateContent;

    start.appendChild(startDateSpan);
    start.appendChild(dateText);

    const end = document.createElement("div");
    const endDateSpan = document.createElement("span")
    const endDateText = document.createElement("span")    
    endDateSpan.classList.add("pe-2")
    const newClock = document.createElement("img");
    newClock.src ="images/sand-clock 1.svg"
    endDateSpan.appendChild(newClock);
    end.classList.add("pe-5", "me-5")
    endDateText.textContent = endDateContent;
     presentEndDate = endDateContent;

    end.appendChild(endDateSpan);
    end.appendChild(endDateText);
    
    divDate.appendChild(start); 
    divDate.appendChild(end);

    details.appendChild(myDetails)
    details.appendChild(detailText)
    details.appendChild(divDate)

    startDate.value = "";
    startDateContent.value=""
    endDate.value = "";
    endDateContent.value = ""
    detail.value = "";
    // detailContent.value="";
}






// edit todo content

    edit.addEventListener('click', (e) => {
         let id = 1;
         let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
         myModal.show();
         taskInput.value = presentInput;
         startDate.value = presentStartDate;
         endDate.value = presentEndDate;
         detail.value = presentdetail;

         console.log(presentInput);
         console.log(taskInput)
         console.log("this the value of the paragraph")
         let text = document.querySelector("#submit-new-task") 
         text.innerHTML = "SAVE TASK";
         
        const  newTask = taskInput.value;
        if(task.id == newTask.id){
            console.log("this is the current id")
            console.log(task.id);

        }
    });
        //  addInputContent.replaceWith(newTask)
        //  console.log(newTask)
        //  console.log("new task");

    
    // });   
    // delete todo content 

//     delet.addEventListener('click', (e) => {
// 			 tasks.removeChild(task);
		


    //  check todo as done
     checkbox.addEventListener('click', (e) => {
      console.log(completedTask);

      const task= document.createElement("div")
      task.classList.add("task","d-flex","justify-content-between","mb-2", "rounded-2", "pe-2", "bg-light");

      const inputDiv= document.createElement("div")
      inputDiv.classList.add("ps-3")
      const textParagraph=document.createElement("p");
      textParagraph.classList.add("pt-2");
      textParagraph.textContent=presentInput;
      console.log(textParagraph);
      inputDiv.appendChild(textParagraph);
      console.log(inputDiv);
      
      task.appendChild(inputDiv);
      console.log(task)
      todoActions(task)
      
    
    //   myTask.appendChild(myTask);  

      completedTask.appendChild(task);
      console.log("completed task here")
      console.log(completedTask);
      tasks.removeChild(task);

  });  
    
              
		// });
      
    


      

        // document.querySelector('#exampleModal').modal({ show: false})
        //  document.querySelector('#exampleModal').modal({ show: true})

          


    //                                         <button type="button" class="btn but-add" data-bs-toggle="modal"
    //                                 data-bs-target="#exampleModal" data-bs-whatever="@mdo"><img src="images/Group 2.svg"
    //                                     class="pt-3 pe-3 ms-2 img-fluid" rel=""></button>   
        
			// if (edit.img =="images/edit.svg") {
			// 	edit.img = "images/checkmark-circled.svg";
			// 	task.removeAttribute("readonly");
			// 	task.focus();
            //     console.log(edit);
			// } else {
			// 	edit.img = "images/edit.svg";
			// 	taskInput.setAttribute("readonly", "readonly");
			// }
    //  addInputContent = "";
    //  text.innerHTML ="CREATE TASK"
		
    


//    button.addEventListener("click",function(){
//     tasks.removeChild(task);

//    subtodo.src = ".images/arrow-long-right-c.svg";

//  <div class=" task d-flex justify-content-between rounded-2 mb-2 pe-3 first-task "></div> 
// <div class="ps-3">
//     <p class="pt-2">Task to do inthe near future</p>

// </div>
// <div class="">
//     <img src="images/arrow-long-right-c.svg" class="pe-3" rel="">
//     <img src="images/delete.svg" class="pe-3" rel="">
//     <img src="images/edit.svg" class="pe-3" rel="">
//     <img src="images/checkmark-circled.svg" rel="">
// </div>


    




    //   e.addEventListener("click",function(){


    //   tasks.removeChild(task);

    //   })
    

// function addFunction(e){
// e.preventDefault();
//     console.log(e.target);
//     document.querySelector(".popup").style.display = "block";
//     console.log("helooooooo dsdjskdjksjdksjdskdjskdjsk")

// }

// function closeFunction(){
//     console.log(e.target);
//     document.querySelector(".popup").style.display = "none";
//     console.log("heloooooo ldd dkslksldklsks dksdkslkdsldk skldkslkdslksdksldksldksldkslkds dskldksldksldkslkd dkslkdlkdlskdslko")
// }


function switchTab(currentContentId) {

    let tabs = document.getElementsByClassName("tab-pane");
    for(let i=0; i<tabs.length; i++){
        if (tabs[i].classList.contains("active")) {
            tabs[i].classList.remove("active");
            tabs[i].classList.remove("show");
        }else{
            if (tabs[i].getAttribute("id") == currentContentId ) {
                tabs[i].classList.add("active")
                tabs[i].classList.add("show")
            }
        }
    }
}

function switchActiveClass(e){
     e.preventDefault();
    let currentContentId = e.target.getAttribute("content-id");
    
    let navItems = document.getElementsByClassName("nav-item");
    for(let i=0; i<navItems.length; i++){


        if(navItems[i].getAttribute("content-id") == currentContentId && !navItems[i].classList.contains("active")){
            navItems[i].classList.add("active");
             switchTab(currentContentId);
        }
        else{
            navItems[i].classList.remove("active");
            switchTab(currentContentId);
        }
    }
    

}


    
    // console.log(activeTab);
    // activeTab.classList.remove("active show");
    // let PresentTab = document.getElementById(currentContentId);
    // PresentTab.classList.add("active show")
    // console.log("creating the new tab");
    // console.log(newActiveClass);
    /**
     * 1-get the content id of this element
       
     * 2-remove class active and show from tap-pane
     * 3-select the new active tap-pane using the content id we got from step1
     * 4-add active and show class to the element at step3 
     */
    
