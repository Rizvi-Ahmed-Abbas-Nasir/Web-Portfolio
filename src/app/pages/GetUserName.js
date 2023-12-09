"use client"
import { Raleway } from 'next/font/google';
import abbaspic1 from "../Images/abbaspic1.png"
import Image from 'next/image';
import { useEffect } from 'react';
import DesktopIcon from './DesktopIcon';
import { OnScrollAnimation } from '../OnScrollAnimmation';

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
                   entry.target.classList.add('rightSlider');
                 }
                 else{
                   //entry.target.classList.remove("show")
                 }
               })
             } )

          

       
             if (typeof document !== 'undefined') {
               // will run in client's browser only
               const hiddenElement = document.querySelectorAll(".hidden3");
              hiddenElement.forEach((el) => observer.observe(el));
           }
       
             },[]);



            // Get the User Name Input
             const handleInputChange = () => {
              if (typeof document !== 'undefined') {
                const UserName = document.getElementById('UserName');
              }
             };
           
          
          

    return(
        <div className="UserNameContent">
          <div className='DesktopIconAnimation hidden2'>
              <DesktopIcon />          
          </div>
          {/* <div className='Pyramid'></div> */}
          <div className='GetUserInputWarpper hidden3'>
            <div className='InputWarpper'>
              <div className='DeveloperName'>
             <h2>Enter Your Developer Name</h2>
             </div>
             <div className='InputBox'></div>
              <div class="group">      
                <input type="text" id='UserName' required />
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
            <div className='UserNamebtn'>
                <button onClick={handleInputChange}>Submit</button>
            </div>
            </div>
            
          </div>
        </div>
    );

}
