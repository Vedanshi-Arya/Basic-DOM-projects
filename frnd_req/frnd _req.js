let friend=document.querySelector('h3');
let add=document.querySelector('.add');
add.addEventListener("click",function(){
    friend.innerText="Friends";
    friend.style.color="green";
})
let remove=document.querySelector('.remove');
remove.addEventListener("click",function(){
     friend.innerText="Send Request";
     friend.style.color="red";
})