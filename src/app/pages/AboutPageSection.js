
"use client";

import { Raleway } from 'next/font/google';
import { useEffect } from "react";
import GetUserName from './GetUserName';
// import Myself from './pages/Myself';



// Fonts
const raleway = Raleway({ 
    subsets: ['latin'],
    weight: ['400'],
    //style: ['italic'] 
})

const raleway2 = Raleway({ 
    subsets: ['latin'],
    weight: ['400'],
    //style: ['italic'] 
})
// ##

export default function AboutPageSection() {

    //On Scroll Animation Function
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
        const hiddenElements = document.querySelectorAll(".hidden");
         
        hiddenElements.forEach((el) => observer.observe(el));
    }

      },[]);
   

  
      
    

    return(
        <div className="AboutME">
            <div className="AboutME_Contents">
            <div className={raleway.className} id='Greeting'>
            <h1 className='hidden' >Hii there, Nice to meet you!!</h1> 
            <h2 className='hidden'>Thank Your For Visiting My Web Portfolio</h2>
            <p className='hidden'> Welcome!! my fellow devs, it's an honour for me, a Professional dev like yourself is reviewing my
            porfolio if you came here i am assuming you wanted to see my skills, projects and my Professional Works, Hii My Name is Rizvi Ahmed Abbas i am Computer Engineer Student Currently Pursuring Bacholar In Computer (BE)
            and a MERN Stack, Python Developer i had work as an intern in ElectricBikeWale as an Full-stack developer and Hasbasoft as an MERN Stack Developer, also i had state level winner in my college for my project AI Machine 
            Vision Desktop Controller for more detial please review my full Portfolio
            </p>
            </div>
            </div>
            <div className='MySelfContent'>
              <GetUserName />
            </div>
        </div>
    );


}