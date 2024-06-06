"use client"
import { Raleway } from 'next/font/google';
import {useEffect } from 'react';
import OnScrollAnimation from '../OnScrollAnimmation';

const raleway = Raleway({ 
    subsets: ['latin'],
    weight: ['100'],
    //style: ['italic'] 
})

const raleway2 = Raleway({ 
    subsets: ['latin'],
    weight: ['400'],
    //style: ['italic'] 
})

export default function TimeLineComponent() {
    
     // //On Scroll Animation Function
     useEffect(()=> {
        if (typeof document !== 'undefined') {
            // will run in client's browser only
            var hiddenElements = document.querySelectorAll(".hidden");
            // console.log(hiddenElements);
             OnScrollAnimation(hiddenElements)
          }
        },[]);

  return (

    <div class="design-section">
        <div className={raleway.className} id='ExperienceHeader'>
            <h1>Experience</h1>
        </div>
        <div class="timeline">

            <div class="timeline-empty">
            </div>
            <div class="timeline-middle">
                   
            <div class="timeline-circle"></div>
            </div>
            <div class="timeline-component timeline-content hidden">
                <h3 className={raleway2.className}>IBM Full Stack Developer - Internship</h3>
                <p>• As an Experienced Intern my task to handle side project such as implement
                            google login/sign with google OAuth for future integration</p>
                    <p>• Create their website landing page using react as fronted and Django as a
                            backend with login authentication</p>
                    <p></p>
                    <p>• Learn WordPress technology and create a new website instructed by senior.
                    </p>

                <div className='SkillUsed'>
                    <h4 className={raleway2.className}  >React.js</h4>
                    <h4 className={raleway2.className}  >Node.js</h4>
                    <h4 className={raleway2.className}  >Express.js</h4>
                    <h4 className={raleway2.className}  >JavaScript</h4>
                    <h4 className={raleway2.className}  >REST API</h4>
                    <h4 className={raleway2.className}  >MVC Model</h4>

                </div>
                <div className='AboutBTN'>  
                    <button>About Certification</button>
                </div>
               
           </div>
            <div class="timeline-component timeline-content hidden">
                <h3 className={raleway2.className} >Xzect Full Stack Developer - Internship</h3>
                <p>• As an Experienced Intern my task to handle side project such as implement
                            google login/sign with google OAuth for future integration</p>
                    <p>• Create their website landing page using react as fronted and Django as a
                            backend with login authentication</p>
                    <p></p>
                    <p>• Learn WordPress technology and create a new website instructed by senior.
                    </p>

                <div className='SkillUsed'>
                    <h4 className={raleway2.className}  >React.js</h4>
                    <h4 className={raleway2.className}  >Django</h4>
                    <h4 className={raleway2.className}  >JavaScript</h4>
                    <h4 className={raleway2.className}  >React.js</h4>
                    <h4 className={raleway2.className}  >React.js</h4>

                </div>
                <div className='AboutBTN'>  
                    <button>About Certification</button>
                </div>
            </div>
            <div class="timeline-middle">
                    <div class="timeline-circle"></div>
            </div>
            <div class="timeline-empty">
            </div>

            <div class="timeline-empty">
            </div>

            <div class="timeline-middle">
                   <div class="timeline-circle"></div>
            </div>
               <div class=" timeline-component timeline-content hidden">
                <h3 className={raleway2.className} >Perulima Motors Full Stack - Internship</h3>
                    <p>• As an Experienced Intern my task to handle side project such as implement
                            google login/sign with google OAuth for future integration</p>
                    <p>• Create their website landing page using react as fronted and Django as a
                            backend with login authentication</p>
                    <p></p>
                    <p>• Learn WordPress technology and create a new website instructed by senior.
                    </p>

                <div className='SkillUsed'>
                    <h4 className={raleway2.className}  >React.js</h4>
                    <h4 className={raleway2.className}  >Django</h4>
                    <h4 className={raleway2.className}  >JavaScript</h4>
                    <h4 className={raleway2.className}  >React.js</h4>
                    <h4 className={raleway2.className}  >React.js</h4>

                </div>
                <div className='AboutBTN'>  
                    <button>About Certification</button>
                </div>
                   
           </div>
    
            <div class="timeline-component timeline-content hidden">
                <h3 className={raleway2.className}>Hasbasoft MERN Stack Developer - Internship</h3>
                <p>• As an Experienced Intern my task to handle side project such as implement
                            google login/sign with google OAuth for future integration</p>
                    <p>• Create their website landing page using react as fronted and Django as a
                            backend with login authentication</p>
                    <p></p>
                    <p>• Learn WordPress technology and create a new website instructed by senior.
                    </p>

                <div className='SkillUsed'>
                    <h4 className={raleway2.className}  >React.js</h4>
                    <h4 className={raleway2.className}  >Django</h4>
                    <h4 className={raleway2.className}  >JavaScript</h4>
                    <h4 className={raleway2.className}  >React.js</h4>
                    <h4 className={raleway2.className}  >React.js</h4>

                </div>
                <div className='AboutBTN'>  
                    <button>About Certification</button>
                </div>
           </div>
            <div class="timeline-middle">
                   <div class="timeline-circle"></div>
            </div>

       </div>
    </div> 
   
  
  );
};


