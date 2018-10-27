function setListners(className,eventHandler){
  let elems=document.querySelectorAll(className);
  for(let i=0;i<elems.length;i++){
      elems[i].addEventListener('click',eventHandler);
  }
}

function deleteHandler(event){
   let contacts=JSON.parse(localStorage.getItem('contacts')) || [];
   contacts.splice(event.target.dataset.index,1);
   localStorage.setItem('contacts',JSON.stringify(contacts));
   getContacts();
}
function getContacts(){
   let cardContainer=document.querySelector('#cardcontainer');
   let contacts=JSON.parse(localStorage.getItem('contacts')) || [];

   if(contacts.length){
       let cardString='';

       for(let i=0;i<contacts.length;i++){
           cardString +=`

           <div class="col s12 m6 l4 xl4">
                           <div class="card m2-card">
                               <div class="card-content center-align">
                                   <span class="card-title">
                                       ${contacts[i].name}
                                   </span>
                                   <p>${contacts[i].phone}</p>
                                   <div class="card-action right-align">
                                       <button class="btn m2-card">Edit</button>
                                       <button class="btn red m2-card delete" data-index=${i}>Delete</button>
                                   </div>
                               </div>
                           </div>
                       </div>
           `;
       }
       cardContainer.innerHTML=cardString;
       setListners('.delete',deleteHandler);
   }else{
       cardContainer.innerHTML='<h1>No items!</h1>';
   }
}

getContacts();