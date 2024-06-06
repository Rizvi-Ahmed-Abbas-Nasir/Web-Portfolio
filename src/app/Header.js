"use client"

import { useEffect } from "react";
import React, {useState} from "react";
import Link from 'next/link';


export default function Header() {

    // Header Sticky Animation //
    useEffect(() =>{
        window.addEventListener('scroll', isSticky);
    return () =>{
        window.removeEventListener('scroll', isSticky);
    }
    });
    const isSticky = () =>{
        const header = document.querySelector(".Header-section");
        const scrollTop = window.scrollY;
        scrollTop >= 90 ? header.classList.add('isSticky'):header.classList.remove('isSticky');
    }
    // $$

    // local storage for saving the visits
    // click for saved 'darkMode' in localStorage
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        var darkMode = localStorage.getItem('darkMode');
      }
    

    //To enabled DarkTheme function
    const enableDarkTheme = () => {
        // 1 add the class to the body
        document.body.classList.add('darkmode');

        // 2 Update darkMode in the localStorage
        localStorage.setItem('darkMode','enabled');
    }

    const disableDarkTheme = () => {
        // 1 remove the class to body
        document.body.classList.remove('darkmode');

        // 2 update in localstorage
        localStorage.setItem('darkMode', null);
    }

    // If the user already visited and enabled darkmode
    // start things off with it on
    if(darkMode === "enabled"){
        enableDarkTheme();    
    }

    //when user click the button
    // Theme Toggle
    const DarkTheme = () => {
        darkMode = localStorage.getItem('darkMode');
        const themeicon = document.querySelector("#themeicons")
        if(darkMode !== "enabled"){
            enableDarkTheme();
            themeicon.classList.remove("gg-moon")
            themeicon.classList.add("gg-sun")
        }
        else{
            disableDarkTheme();
            themeicon.classList.remove("gg-sun")
            themeicon.classList.add("gg-moon")
        }
    
    }
    // $$

    //Sub-menu bar Mobile Responsive
    const [active, setActive] = useState(false);
    
    return(
        <div className="ParentHeader">
        <div className='Header Header-section'>
            <div className="icon"><h4>rizvi.dev</h4></div>
            <div className="SideNAV">
                    <li><Link href="/"><h4>Home</h4></Link></li>
                    <li><Link href="/About"><h4>About</h4></Link></li>
                    <li><h4>Projects</h4></li>
                    <li><h4>Awards</h4></li>
                    <li><h4>Contact</h4></li>
                    <div>
                        <div onClick={DarkTheme} className="ThemeIcons"> 
                        <div id="themeicons" className="gg-moon"></div>
                        </div>
                    </div>
            </div>
            <div className="HamBurgerIcon" onChange={() => setActive(!active)}>
                    <label for="check">
                        <input type="checkbox" id="check"/> 
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
            </div>
            
        </div>
        <div className={active ? "Sub-SideNav-on-click":"Sub-SideNav "}>
                <div className="menuItems">
                    <li>
                        <h4>Home</h4>
                    </li>
                    <li>
                        <h4>About</h4>
                    </li>
                    <li>
                        <h4>Projects</h4>
                    </li>
                    <li>
                        <h4>Awards</h4>
                    </li>
                    <li>
                        <h4>Contact</h4>
                    </li>
                    {/* <div>
                        <div onClick={DarkTheme} className="ThemeIcons"> 
                        <div id="themeicons" className="gg-moon"></div>
                        </div>
                    </div> */}
                </div>
            </div>
            
        </div>
        
    );
}   