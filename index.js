

let myId = 0;

// const yesterdayTask = document.querySelector("yesterday-task");
// const importantTask = document.querySelector("important-task");
// const archiveTask = document.querySelector("archive-task");
// const completedTask = document.querySelector("completed-task");
// console.log(todayTask);
// console.log(completedTask);

function submitForm(e){
e.preventDefault();

const  submitBut = document.querySelector('#submit-new-task')
const  taskInput = document.querySelector(".task-input")
const  tasks = document.querySelector(".task")
const details = document.getElementById("details");
console.log(details);
const startDate = document.querySelector(".start-date");
console.log(startDate)
const endDate = document.querySelector(".end-date");
const detail = document.querySelector(".detail");



// adding todo task
const todayTask = document.getElementById("today");
const yesterdayTask = document.getElementById("yesterday-task");
const importantTask = document.getElementById("important-task");
const archiveTask = document.getElementById("archive-task");
const completedTask = document.getElementById("completed-task");
console.log(todayTask);
console.log(completedTask);

console.log(submitBut);

console.log(taskInput);

const addInputContent = taskInput.value;
    if(addInputContent==""){
      alert("please add a task");
    }


// if(addInputContent.trim()!=0){
//     let webtask = localStorage.getItem("localtask");
//     if(webtask == null){
//         taskObj = [];
//     }
//     else{
//         taskObj = JSON.parse(webtask);
//     }
//     taskObj.push({'task_name':addInputContent, 'completeStatus':false});
//     // console.log(taskObj, 'Ashendra');
//     localStorage.setItem("localtask", JSON.stringify(taskObj));
//     addtaskinput.value = '';
// }
 
   const task= document.createElement("div")
   task.classList.add("task","d-flex","justify-content-between","mb-2", "rounded-2", "pe-3", "bg-light");
   const paddi= document.createElement("div")
   paddi.classList.add("ps-3")
   

   const paragraph=document.createElement("p");
   paragraph.classList.add("pt-2");
   paragraph.textContent=addInputContent;
   const presentInput = addInputContent;
   console.log("my-present input")
   console.log(presentInput);
   console.log(addInputContent);
   paddi.appendChild(paragraph);
   task.appendChild(paddi);
   console.log("paragraph before editing")
   

   const todoFunctions= document.createElement("div");

   const subtodo = document.createElement("img")
   subtodo.setAttribute( "src", "images/arrow-long-right-c.svg");
   subtodo.classList.add("pe-3","pt-2");
   const delet = document.createElement("img")
   delet.src ="images/delete.svg";
   delet.classList.add("pe-3","pt-2", "delete-but", "hover-overlay")
  
   const edit = document.createElement("img")
   edit.setAttribute("src", "images/edit.svg");
    edit.classList.add("pe-3","pt-2")

   const checkbox = document.createElement("img")
   checkbox.setAttribute("src", "images/checkmark-circled.svg");
   checkbox.classList.add("pe-1" ,"pt-2")
   
   todoFunctions.appendChild(subtodo);
   todoFunctions.appendChild(delet);
   todoFunctions.appendChild(edit);
   todoFunctions.appendChild(checkbox);

   task.appendChild(todoFunctions);
   task.id += 1;

   tasks.appendChild(task)
   
   taskInput.value = "";    
   addInputContent.value = "";
   
   console.log(task);
   console.log(tasks);
   console.log("I am picking you up");
   console.log(addInputContent);


//    adding date and details
   const startDateContent = startDate.value;
   const endDateContent = endDate.value;
   const detailContent = detail.value;
    
   const cars = ["startDateContent", "endDateContent", "detailContent"];
   cars.forEach(element => {
    if (element == ""){
        alert("please add an input")
        return;
    }
    
   });
   
    const myDetails = document.createElement("div")
    myDetails.classList.add("pb-3", "fs-5")
    const myDetail = document.createElement("paragraph")
    myDetail.classList.add= ("fw-bold ");
    myDetail.innerHTML= ("DETAILS")
    myDetails.appendChild(myDetail);

    const lorem = document.createElement("paragraph")
    lorem.classList.add= ("ps-1", "pe-4", "fs-4")
    lorem.textContent = detailContent;
    const presentdetail = detailContent;

    const divDate = document.createElement("div");
    divDate.classList.add("time-track","d-flex","justify-content-between");
    
    const start = document.createElement("div");
    const startDateSpan = document.createElement("span");
    startDateSpan.textContent = startDateContent;
    const presentStartDate = startDateContent;

    start.appendChild(startDateSpan);

    const end = document.createElement("div");
    const endDateSpan = document.createElement("span")
    endDateSpan.classList.add("pe-5", "me-5")
    endDateSpan.textContent = endDateContent;
    const presentEndDate = endDateContent;
    end.appendChild(endDateSpan);

    divDate.appendChild(start);
    divDate.appendChild(end);
    
    details.appendChild(myDetails)   
    details.appendChild(lorem)
    details.appendChild(divDate)

    startDate.value = "";
    startDateContent.value=""
    endDate.value = "";
    endDateContent.value = ""
    detail.value = "";
    // detailContent.value="";
    



                        //     <h6 class="fw-bold">DETAILS</h6>
                        // <p class=" ps-1 pe-4 lorem">Lorem ipsum dolor sit amet, consetetur sadipci elitr, sed diam
                        //     nonumy
                        //     eirmod tempor invidunt ut labore et dolore magna
                        //     aliquyam erat, sed

                        // </p>
                        // <div class="d-flex justify-content-between time-track">
                        //     <div class="">
                        //         <span>

                        //             <img src="images/sand-clock 1.svg" rel="">
                        //         </span>
                        //         MON 10-10-22

                        //     </div>
                        //     <div class=" pe-5 me-3">
                        //         <span>
                        //             <img src="images/sand-clock 1.svg" rel="">
                        //         </span>
                        //         MON 10-10-22
                        //     </div>
                        // </div>






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
        //  addInputContent.replaceWith(newTask)
        //  console.log(newTask)
        //  console.log("new task");

    
    });   
    // delete todo content 

    delet.addEventListener('click', (e) => {
			 tasks.removeChild(task);
		});


    //  check todo as done
     checkbox.addEventListener('click', (e) => {
      
	  tasks.removeChild(task);
      console.log(completedTask);
      const myTask= document.createElement("div")
      myTask.classList.add("task","d-flex","justify-content-between","mb-2", "rounded-2", "pe-2", "bg-light");

      const inputDiv= document.createElement("div")
      inputDiv.classList.add("ps-3")
      const textParagraph=document.createElement("p");
      textParagraph.classList.add("pt-2");
      textParagraph.textContent=presentInput;
      console.log(addInputContent);
      inputDiv.appendChild(textParagraph);
        
      console.log("findings"); 
      console.log(inputDiv);
      const divDelete = document.createElement("div")
      const delet = document.createElement("img")
      delet.src ="images/delete.svg";
      delet.classList.add("pe-3","pt-2", "delete-but", "hover-overlay")
      divDelete.appendChild(delet);

      myTask.appendChild(inputDiv);
      myTask.appendChild(divDelete);  

      completedTask.appendChild(myTask);
      console.log("completed task here")
      console.log(completedTask);
    //   tasks.removeChild(task);
    
  

              
		});
        addInputContent.value = "";
    }


      

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
