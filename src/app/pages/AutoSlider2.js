import Abbas1 from '../Images/honors/abbas1.jpeg'
import Abbas2 from '../Images/honors/abbas2.jpeg'
import Abbas7 from '../Images/honors/abbas7.jpeg'
import Abbas4 from '../Images/honors/abbas4.jpeg'
import Abbas8 from '../Images/honors/abbas8.jpeg'
import Abbas9 from '../Images/honors/abbas9.jpeg'
import abbas from '../Images/Rizvi Ahmed Abbas2.png';
import Image from 'next/image';




export default function AutoSlider2(){
  
  return (
    <div className="" >
       
       <section class="slider_container">
      <section class="slider">
        <div class="slide one">
          <Image  className="SliderIMG1" src={Abbas1} />
          {/* <span class="caption"> slide one </span> */}
        </div>
        <div class="slide two">
        <Image  className="SliderIMG3" src={Abbas4}  />
        </div>
        <div class="slide three">
        <Image  className="SliderIMG1" src={Abbas9} />
        </div>
        <div class="slide six">
        <Image  className="SliderIMG2" src={Abbas8}  />
        </div>
        <div class="slide four">
        <Image  className="SliderIMG1" src={Abbas7}  />
        </div>
        <div class="slide five">
        <Image  className="SliderIMG2" src={Abbas1}  />
        </div>
      
      </section>
    </section>
    </div>
    
  )
}