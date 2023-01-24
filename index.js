

let myId = 0;
function submitForm(e){
    e.preventDefault();
    console.log("Hurrah i am submitting");
const  submitBut = document.querySelector('#submit-new-task')
const  taskInput = document.querySelector(".task-input")
const  tasks = document.querySelector(".task")
console.log(submitBut);
console.log(taskInput);

  let addInputContent =taskInput.value;
  if(addInputContent==""){
//         alert("please add a task");
    }

   const task= document.createElement("div")
   task.classList.add("task","d-flex","justify-content-between","mb-2", "rounded-2", "pe-3", "bg-light");
   const paddi= document.createElement("div")
   paddi.classList.add("ps-3")
   

   const paragraph=document.createElement("p");
   paragraph.classList.add("pt-2");
   paragraph.textContent=addInputContent;
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
   checkbox.classList.add("pe-3" ,"pt-2")
   
   todoFunctions.appendChild(subtodo);
   todoFunctions.appendChild(delet);
   todoFunctions.appendChild(edit);
   todoFunctions.appendChild(checkbox);

   task.appendChild(todoFunctions);
   task.id += 1;
   tasks.appendChild(task)
   
   console.log(task);
   console.log(tasks);
   console.log("I am picking you up");
    console.log(addInputContent);



// edit todo content
    edit.addEventListener('click', (e) => {
         let id = 1;
         let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
         myModal.show();
         taskInput.textContent = addInputContent.value;
         console.log(addInputContent);
         console.log(taskInput);
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
		});


      

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
		
    
}  


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
    

function addFunction(e){
e.preventDefault();
    console.log(e.target);
    document.querySelector(".popup").style.display = "block";
    console.log("helooooooo dsdjskdjksjdksjdskdjskdjsk")

}

function closeFunction(){
    console.log(e.target);
    document.querySelector(".popup").style.display = "none";
    console.log("heloooooo ldd dkslksldklsks dksdkslkdsldk skldkslkdslksdksldksldksldkslkds dskldksldksldkslkd dkslkdlkdlskdslko")
}
