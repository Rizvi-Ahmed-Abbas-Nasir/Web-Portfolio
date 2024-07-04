import Abbas1 from '../Images/honors/abbas1.jpeg'
import Abbas2 from '../Images/honors/abbas2.jpeg'
import Abbas3 from '../Images/honors/abbas3.jpeg'
import Abbas4 from '../Images/honors/abbas4.jpeg'
import Abbas5 from '../Images/honors/abbas5.jpeg'
import Abbas6 from '../Images/honors/abbas6.jpeg'
import abbas from '../Images/Rizvi Ahmed Abbas2.png';
import Image from 'next/image';




export default function AutoSlider(){
  
  return (
    <div className="" >
       
       <section class="slider_container">
      <section class="slider">
        <div class="slide one">
          <Image  className="SliderIMG1" src={Abbas5} />
          {/* <span class="caption"> slide one </span> */}
        </div>
        <div class="slide two">
        <Image  className="SliderIMG1" src={Abbas2}  />
        </div>
        <div class="slide three">
        <Image  className="SliderIMG1" src={Abbas3} />
        </div>
        <div class="slide six">
        <Image  className="SliderIMG2" src={Abbas6}  />
        </div>
        <div class="slide four">
        <Image  className="SliderIMG1" src={Abbas5}  />
        </div>
        <div class="slide five">
        <Image  className="SliderIMG2" src={Abbas6}  />
        </div>
      
      </section>
    </section>
    </div>
    
  )
}
