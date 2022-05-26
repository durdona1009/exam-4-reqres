import newNodes from "./newNodes.js";

export default function(location, data){
   let myFrg = document.createDocumentFragment();
   
   data.forEach((user) => {
       let newNode = newNodes(user);
       myFrg.append(newNode);
   })

   location.innerHTML = '';
   location.append(myFrg)
}