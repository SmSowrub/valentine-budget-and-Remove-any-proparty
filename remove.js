document.getElementById('Apply').addEventListener('click',function(){
    const element =document.getElementById('inputText').value;
    document.getElementById('inputText').value="";

    const new_Element=document.getElementById('parant-container');
    const li = document.createElement("li");
    li.innerText=element;
    li.classList.add('new-list');
    new_Element.appendChild(li);

    const allList =document.getElementsByClassName('new-list');
    for (const item of allList) {
        item.addEventListener('click',function(event){
            event.target.parentNode.removeChild(event.target);
            
        })
    }
})
   


document.getElementById('clickMe').addEventListener('click',function(){
    document.getElementById('c-1').innerText="Bangladesh";
    document.getElementById('c-2').innerText="India";
    document.getElementById('c-3').innerText="Canada";
    document.getElementById('c-4').innerText="London";
  
})
