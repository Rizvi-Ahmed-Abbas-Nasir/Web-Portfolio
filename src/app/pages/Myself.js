"use client"

import { Raleway } from 'next/font/google';
import abbaspic1 from "../Images/abbaspic1.png"
import Image from 'next/image';
import { useEffect } from 'react';

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

export default function Myself() {

        //On Scroll Animation Function
        useEffect(()=> {
            let observer = new IntersectionObserver((entries) =>{
               entries.forEach((entry) =>{
                 console.log(entry);
                 if(entry.isIntersecting){
                   entry.target.classList.add('showleftSlider');
                 }
                 else{
                   //entry.target.classList.remove("show")
                 }
               })
             } )
       
             if (typeof document !== 'undefined') {
               // will run in client's browser only
               const hiddenElement = document.querySelectorAll(".hidden2");
               hiddenElement.forEach((el) => observer.observe(el));
           }
       
             },[]);
          

    return(
        <div className="contentMyself">
            <div className={raleway.className} id='MyContents'>
            <h1 className='hidden2 MyHeading' >My Introduction </h1> 
              <div className='Pyramid'></div> 
            </div>
        </div>
    );

}