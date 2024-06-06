"use client"

import { Raleway } from 'next/font/google';
import { useEffect } from 'react';
import OnScrollAnimation from '../OnScrollAnimmation';
import ExpandCard from './ExpandCard';

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
        if (typeof document !== 'undefined') {
          // will run in client's browser only
          var hiddenElements = document.querySelectorAll(".hidden");
        //   var hiddenElement2 = document.querySelectorAll(".hidden2");
        //   var hiddenElement2 = document.querySelectorAll(".hidden3");
          // console.log(hiddenElements);
           OnScrollAnimation(hiddenElements)
        //    OnScrollAnimation(hiddenElement2)
        }
        },[]);
          

    return(
        <div className="contentMyself">
            <div className='Pyramid hidden'>
                <div className='MySelfBlock'>
                    <div className='MySelfIntroductionBlock'>
                        <div className='MySelfParagraph MySelfH1 hidden'>
                            <div className='MySelfFirstHeading'>
                                <h1>Who Am I</h1>
                            </div>
                            <div className='MySelfIntroductionPara'>
                                <div className='MySelfHeading1'>
                                    <h3>A Computer enthusiastic</h3>
                                </div>
                                <div className='MySelfHeading1'>
                                    <h3>A Student Who Want to Dedicate his to Life to Programming</h3>
                                </div>
                                {/* <div className='MySelfHeading1'>
                                    <h3>Completed My Diploma With 86.51%</h3>
                                </div> */}
                                <div className='MySelfHeading1'>
                                    <h3>Winner in State Level Competition & Runner-up in Hackathon</h3>
                                </div>
                                <div className='MySelfHeading1'>
                                    <h3>1+ Years of experience of Internships in MERN Stack Development & Python</h3>
                                </div>
                                <div className='MySelfHeading1'>
                                    <h3>Worked on Many Full stacks Project and GUI Applications with Git Repos</h3>
                                </div>
                                {/* <div className='MySelfPara'>
                                    <p>I am an enthusiastic Student/Programmer, Currently Stdying 
                                    </p>
                                </div> */}
                                <div class="MySelfBtn">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='MySelfQualities MySelfH1 hidden '>
                            <div>
                                <h1>Qualities</h1>
                            </div>
                            <div className='MySelfCard'>
                                <ExpandCard />
                            </div>
                        </div> 
                    </div> 
                </div>
            </div> 

        </div>
    );

}