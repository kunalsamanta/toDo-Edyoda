const inputText= document.getElementById("input-text");
const listContainer= document.getElementById("list-container");



function change(){
    if(inputText.value === ''){
        alert('Please enter a valid word');
        }else{
            // let checkbox = document.createElement('input');
            // checkbox.type = "checkbox";
            // checkbox.name = "name";
            // checkbox.value = "value";
            // checkbox.id = "id";
            // listContainer.appendChild(checkbox);

            // var label = document.createElement('label');
            // label.htmlFor = "id";

            let li =document.createElement('li');
            li.innerHTML=inputText.value;
            listContainer.appendChild(li);

            let span= document.createElement('span');
            span.innerHTML='\u00d7';
            li.appendChild(span);

    }
    inputText.value='';
}

listContainer.addEventListener(click,function(e){
    if (e.target.tagName ==="LI"){
        e.target.parentElement.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
