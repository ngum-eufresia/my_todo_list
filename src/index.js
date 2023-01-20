

function addFunction(){
document.addEventListener("click", function(e){

    console.log(e.target);
    document.querySelector(".popup").style.display = "block";
    console.log("helooooooo")
})
}

function closeFunction(){
document.addEventListener("click", function(e){

    console.log(e.target);
    document.querySelector(".popup").style.display = "none";
    console.log("helooooooo")
})
}