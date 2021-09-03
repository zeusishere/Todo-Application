
// arrays stores all collapsible tasks
var  collapsibleElements = document.querySelectorAll(".collapsible") ;
// collapsible elments
for ( let col of collapsibleElements)
{
  // adds color according to collapsible according to category
  let category=col.querySelector("#category").textContent.trim();
             
  col.classList.add(category);
  //  colors the text displaying status according to it's stage of of progress
  let status = col.querySelector("#status").textContent.trim();
  
  if(status=='completed')
  {
    col.querySelector('span#status').classList.add("green") ;
    
  }
  else // status pending
  {
    col.querySelector('span#status').classList.add("yellow") ;
  }
  // col.querySelector('span#status').classList.add(status) ; extra line ignored



  // collapsible expansion controlleer
    col.addEventListener("click",function(event)
     {
         
         event.target.classList.toggle("active") ;
         var nextContent =  event.target.nextElementSibling;
         
         nextContent.classList.toggle("with-display-block");
       
     }  );
}

//  delete multiple tasks at once
const deleteTasks =document.querySelector("#delete-tasks");
deleteTasks.addEventListener('click', function(event)
{
        console.log(this);
        //get all thr marked check boxes
        let checkedTasks = document.querySelectorAll(".checkbox-container>input[type=checkbox]:checked");
        let checkedTaskIds ={};
        let key="key"
        let i=1;
        
        for(let chkdtask of checkedTasks)
        {
          
          checkedTaskIds[key+i]=chkdtask.value ;
          i++;
        }
        console.log("list is",(checkedTaskIds));
        // var xhrRequest = new XMLHttpRequest();
        // xhrRequest.open("POST","/delete-tasks",true) ;
        // xhrRequest.setRequestHeader("Content-Type", "application/json");
        // xhrRequest.send(JSON.stringify(checkedTaskIds) );
        // xhrRequest.onload = window.location.href="/" ;
      //   $.ajax({
      //     type: 'POST',
      //     data: JSON.stringify(checkedTaskIds),
      //         contentType: 'application/json',
      //                 url: 'http://localhost:8000/delete-tasks',						
      //                 success: function(checkedTaskIds) {
      //                     console.log('success');
      //                     console.log(JSON.stringify(checkedTaskIds));
      //                 },
      //               })

        const inputForm = document.querySelector("#delete-ids") ;
        inputForm.value =JSON.stringify(checkedTaskIds);
        console.log(inputForm.value);

      });
      // to make selected tasks to be opaque when selected for deletion
  {
    let checkedTasks = document.querySelectorAll(".checkbox-container input[type=checkbox]");
    // let parent = checkedTasks.parentNode;
    for ( let checkbox of checkedTasks)
    {
        checkbox.addEventListener("click", function()
        {
          if(this.checked == true)
          console.log("worked") ;
          let parent = this.parentNode.parentNode;
          let collapsible = parent.querySelector(".collapsible") ;
          console.log(this,parent,collapsible);
          collapsible.classList.toggle("opaque");
        }
        ) ;
    }
    console.log("parent node is  ",checkedTasks) ;
  }
