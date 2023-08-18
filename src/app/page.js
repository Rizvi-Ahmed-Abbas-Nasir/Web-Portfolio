"use client"

import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Image from "next/image";
import abbas from './Images/Rizvi Ahmed Abbas2.png'


export default function Home() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
      <div className="homePage">
        <div className="mainPage">
        {<Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "0",
                    },
                },
                fpsLimit: 90,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: "push",
                        // },
                        onhover: {
                          enable: true,
                          mode: "attract",
                          parallax: { enable: true, force: 60, smooth: 10 }
                        },
                        resize: true,
                    },
                    modes: {
                     
                      // attract: { distance: 20, duration: 4, factor: 5 }
                    }
                },
                particles: {
                    color: {value:["#ffffff"]
                  },
                    links: {
                       color: {value:["#181c28"]},
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        /> }

        <div className="frontPage">
            <div className="myPhoto">
                <Image className="rizvi" 
                    src={abbas}
                />

            </div>

            <div className="Descriptions"></div>
        </div>
        </div>
      </div>
    );
};