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
   paddi.appendChild(paragraph);
   task.appendChild(paddi);

   const todoFunctions= document.createElement("div");

   const subtodo = document.createElement("img")
   subtodo.setAttribute( "src", "images/arrow-long-right-c.svg");
   subtodo.classList.add("pe-3","pt-2");

   const delet = document.createElement("img")
   delet.src ="images/delete.svg";
   delet.classList.add("pe-3","pt-2", "delete-but", "hover-overlay")
  
   
//    const edit =document.createElement("a");
//    edit.img="images/edit.svg";
//    edit.href="#"
//    edit.classList.add("pe-3")
   const edit = document.createElement("img")
   edit.setAttribute("src", "images/edit.svg");
   edit.classList.add("pe-3","pt-2")
   console.log(edit);

   const checkbox = document.createElement("img")
   checkbox.setAttribute("src", "images/checkmark-circled.svg");
   checkbox.classList.add("pe-3" ,"pt-2")
   
   todoFunctions.appendChild(subtodo);
   todoFunctions.appendChild(delet);
   todoFunctions.appendChild(edit);
   todoFunctions.appendChild(checkbox);

   task.appendChild(todoFunctions);
   tasks.appendChild(task)
   addInputContent = "";
   console.log(task);
   console.log(tasks);
   console.log("I am picking you up");



delet.addEventListener('click', (e) => {
			 tasks.removeChild(task);
		});
     checkbox.addEventListener('click', (e) => {
      
			 tasks.removeChild(task);
		});
    
    
    // 		edit.addEventListener('click', (e) => {
    //             let id = 1;
    //            addInputContent.value = paragraph.value
    //            console.log("editing subtodo");
    //            console.log(addInputContent);
    //            console.log(taskInput);
               
    //           const butEdit = document.createElement("button");
    //           butEdit.classList.add("btn", "but-add")
    //           butEdit.data-bs-toggle.add"modal";

    //  });
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
