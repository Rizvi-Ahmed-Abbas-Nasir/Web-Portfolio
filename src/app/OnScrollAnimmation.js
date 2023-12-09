
import { useEffect } from "react";

export  function OnScrollAnimation() {
    useEffect(()=> {
        let observer = new IntersectionObserver((entries) =>{
           entries.forEach((entry) =>{
           
             if(entry.isIntersecting){
               entry.target.classList.add('show');
             }
             else{
               //entry.target.classList.remove("show")
             }
           })
         } )
      
  return(observer);
        },[]);

    
}