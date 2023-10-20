
import { useEffect } from "react";

export  function OnScrollAnimation(hiddenElements) {
    useEffect(()=> {
        let observer = new IntersectionObserver((entries) =>{
           entries.forEach((entry) =>{
             console.log(entry);
             if(entry.isIntersecting){
               entry.target.classList.add('show');
             }
             else{
               //entry.target.classList.remove("show")
             }
           })
         } )
   
      
         if (typeof document !== 'undefined') {
           // will run in client's browser only
           hiddenElements.forEach((el) => observer.observe(el));
    }
   
         },[]);
}