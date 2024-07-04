"use client"
import Image from "next/image";
import college from '../Images/college.jpg'
import AutoSlider from "./AutoSlider";
import { useEffect } from "react";
import OnScrollAnimation from '../OnScrollAnimmation';


export default function Slider0() {

      //onScroll Animation
      useEffect(()=> {
        if (typeof document !== 'undefined') {
          // will run in client's browser only
          var hiddenElements = document.querySelectorAll(".hidden");
          var hiddenElement2 = document.querySelectorAll(".hidden2");
          var hiddenElement3 = document.querySelectorAll(".hidden3");
          // console.log(hiddenElements);
          OnScrollAnimation(hiddenElements)
          OnScrollAnimation(hiddenElement2)
          OnScrollAnimation(hiddenElement3)
        }
        },[]);

    const CheckRadioSlider = () =>{
        const Slider1 = document.getElementById('s-1')
        const Slider2 = document.getElementById('s-2')
        Slider1.style.opacity = 1
        Slider1.style.visibility = "visible"
      
        if (typeof document !== 'undefined') {
              Slider2.checked = "checked"
          }
      }
      

    return(

        <div className="SliderContainer hidden">
<input type="radio" id="s-1" name="slider-control" checked="checked" />
<input type="radio" id="s-2" name="slider-control" />
<input type="radio" id="s-3" name="slider-control" />
<div className="js-slider">
  <figure className="js-slider_item img-1">
    <div className="js-slider_img">
    <div className="Js-slider-Education"> <h1>Education</h1></div>
    <div className="js-slider-Ed-details">
    <div className="CollegeName"> <h2>College Name: Vasantdada Patil Pratishthan's College of Engineering </h2></div>
     

    <div className="JS-imgslider">
      <AutoSlider />
    </div>
    
    </div>
   

    </div>
    
  
  </figure>
  <figure className="js-slider_item img-2">
    <div className="js-slider_img">
      <Image className="c-img-h-full" src={college} width={100} height={100} />
      </div>
    <figcaption className="wo-caption">
      <h3 className="wo-h3">「風流無くてなゝくせ」遠眼鏡</h3>
      <ul className="wo-credit">
        <li>大判 享和年間 (1801-04)</li>
        <li>リー・ダークス・コレクション</li>
        <li>展示期間：1月30日 (水) ～ 2月18日 (月)</li></ul>
    </figcaption>
  </figure>
  <figure className="js-slider_item img-3">
    <div className="js-slider_img">
      {/* <img className="c-img-h-full" src="https://pics.codecolor.cn/images-opacity-slider/img_2_2.jpg" alt=""> */}
      </div>
    <figcaption className="wo-caption">
      <h3 className="wo-h3">「風流無くてなゝくせ」ほおずき</h3>
      <ul className="wo-credit">
        <li>大判 享和年間 (1801-04)</li>
        <li>米・個人蔵</li>
        <li>展示期間：1月30日 (水) ～ 2月18日 (月)</li></ul>
    </figcaption>
  </figure>
  <div className="js-slider_nav">
    <label className="js-slider_nav_item s-nav-1 prev" for="s-3" onClick={() => CheckRadioSlider()}></label>
    <label className="js-slider_nav_item s-nav-1 next" for="s-2 " onClick={() => CheckRadioSlider()}></label>
    <label className="js-slider_nav_item s-nav-2 prev" for="s-1" onClick={() => CheckRadioSlider()}></label>
    <label className="js-slider_nav_item s-nav-2 next" for="s-3" onClick={() => CheckRadioSlider()}></label>
    <label className="js-slider_nav_item s-nav-3 prev" for="s-2" onClick={() => CheckRadioSlider()}></label>
    <label className="js-slider_nav_item s-nav-3 next" for="s-1"></label>
  </div>
  {/* <div className="js-slider_indicator">
    <div className="js-slider-indi indi-1"></div>
    <div className="js-slider-indi indi-2"></div>
    <div className="js-slider-indi indi-3"></div>
  </div> */}
</div>
        </div>
        

    );
};
