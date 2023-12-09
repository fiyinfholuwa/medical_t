import React, {useState, useEffect} from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import "./slider.css"
import slider1 from "./../../assets/header_img.jpg";
import slider2 from "./../../assets/header_img2.jpg";
import slider3 from "./../../assets/header_img.jpg";

const slides = [
    { url: slider1, title: "image1" },
    { url: slider2, title: "image2" },
    { url:slider3, title: "image3" }
  ];

const Slider = () => {
    const  [currentSlide, setCurrentSlide] = useState(0)
    const  slideLength = slides.length
    const autoScroll = true
    let slideInterval;
    let IntervalTime = 5000

    const nextSlide = ()=>{
        setCurrentSlide(currentSlide===slideLength -1 ? 0 : currentSlide + 1)
    }
    const prevSlide = ()=>{
        setCurrentSlide(currentSlide=== 0 ? slideLength -1 : currentSlide - 1)
    }


    useEffect(() => {
        if (autoScroll){
            slideInterval = setInterval(nextSlide, IntervalTime);
        }
      return () => clearInterval(slideInterval)
    }, [currentSlide, slideInterval, autoScroll]);
    
  return (
    <div className="slider">
     
    {
        slides.map((slide, index)=>{
            const {url, title} = slide
            return(
                <div id='slide_img' key={index} className={index === currentSlide ? "slide current" : "slide"}>
                    {
                        index === currentSlide && (
                            <>
                                <img src={url} alt={title}/>
                            </>
                        )
                    }
                </div>
            )
        })
    }
    <div  className='dot'>
        <div className={`${currentSlide === 0 ? 'active circle' : 'circle'}`}></div>
        <div className={`${currentSlide === 1 ? 'active circle' : 'circle'}`}></div>
        <div className={`${currentSlide === 2 ? 'active circle' : 'circle'}`}></div>

    </div>
    </div>
  )
}

export default Slider