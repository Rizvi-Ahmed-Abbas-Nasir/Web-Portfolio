"use client"
import { useEffect } from "react";
// import Image from "next/image";
// import darkThemeIcon from './Images/moon.png'
// import LightThemeIcon from './Images/sun.png'

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
    let darkMode = localStorage.getItem('darkMode');

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
        const icon = document.querySelector("#themeicon");
        const themebg = document.querySelector(".ThemeIcons")
        console.log(icon)
        if(darkMode !== "enabled"){
            enableDarkTheme();
            icon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVvHqZcZunH_BUnLAHhLxNhA8ui3VEPI_HftAQ3t-q0u4pszLEY33ot1ZH4rat4vwfGzc&usqp=CAU"
            icon.style.marginTop = "3px"
            themebg.style.border = "solid white 1px"

        }
        else{
            disableDarkTheme();
            icon.src = "https://cdn-icons-png.flaticon.com/512/17/17768.png"
            themebg.style.border = "solid black 1px"
        }
    
    }
    // $$

    return(
        <div className='Header Header-section'>
            <div className="icon"><h4>icon</h4></div>
            <div className="SideNAV">
                    <li><h4>Home</h4></li>
                    <li><h4>About</h4></li>
                    <li><h4>Portfolio</h4></li>
                    <li><h4>Contact</h4></li>
                    <div>
                        {/* <div onClick={DarkTheme} className="ThemeIcons"> <Image id="themeicon" className="darkAndLightIcon" src={darkThemeIcon} width={20} height={20} /></div> */}
                        <div onClick={DarkTheme} className="ThemeIcons"> <img id="themeicon" src="https://cdn-icons-png.flaticon.com/512/17/17768.png"></img></div>

                    </div>
            </div>
                
           
        </div>
    );
}   