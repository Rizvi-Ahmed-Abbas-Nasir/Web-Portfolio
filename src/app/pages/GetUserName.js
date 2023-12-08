"use client"

import { Raleway } from 'next/font/google';
import abbaspic1 from "../Images/abbaspic1.png"
import Image from 'next/image';
import { useEffect } from 'react';
import DesktopIcon from './DesktopIcon';

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
        <div className="UserNameContent">
          <div className='DesktopIconAnimation'>
              <DesktopIcon />          
          </div>
          {/* <div className='Pyramid'></div> */}
          <div className='GetUserInputWarpper'>
            <div className='InputWarpper'>
              <div className='DeveloperName'>
             <h2>Enter Your Developer Name</h2>
             </div>
             <div className='InputBox'></div>
              <div class="group">      
                <input type="text" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Name</label>
              </div>
              <div className='UserNameInputPara'>
              <p>Enter Your Developer Name so i can know your better.</p>
              <div className='InformationPara'>
                  <p>The name that you given will change my Portfolio dymamicly it will referring by your name and it remember it 
                    so when you visit next time it refer by your name
                  </p>
              </div>

            </div>
            </div>
            
          </div>
        </div>
    );

}