"use client"
import { Lobster  } from 'next/font/google';
import { Rokkitt  } from 'next/font/google';
import { Oswald  } from 'next/font/google';
import { Courgette } from 'next/font/google';
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Image from "next/image";
import abbas from './Images/Rizvi Ahmed Abbas2.png';
import insta from './Images/insta.png';
import linkedin from "./Images/linkedin.png"
import github from "./Images/github.png";
import Typewriter from 'typewriter-effect';
import FrontPage from './pages/FrontPage';
import AboutPageSection from './pages/AboutPageSection';



// Fonts Families
const lobster  = Lobster ({ 
    subsets: ['latin'],
    weight: ['400'] 
})

const rokkitt  = Rokkitt ({ 
    subsets: ['latin'],
    weight: ['200'] 
})


const oswald  = Oswald ({ 
    subsets: ['latin'],
    weight: ['200'] 
})

const courgette = Courgette({ 
    subsets: ['latin'],
    weight: ['400'] 
})
  
// $$


export default function Home() {

    return (
      <div className="homePage">
       <FrontPage />
       <div className='content'>
        <div className='AboutPageSection'>
            <AboutPageSection />
        </div>
       </div>
       
      </div>
    );
};