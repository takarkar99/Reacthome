import React from 'react';
import './Second.css';
import Data from '../../Data.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 


function SecondCompp() {
    console.log(Data)
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"

    }
  return (
    <div align='center'>

                <h1 className='calll'>NGOs provide essential aid, advocacy, and resources to address diverse
                    global issues   including poverty, healthcare, education</h1>
        
        <Slider {...settings}>
            {Data.map((value)=>(
                <div className='col-md-4'>
                    <div className='card'>
                        <img src={value.img} className='card-img-top' alt={value.name}/>
                        <div className='d-flex'>
                            <p>{value.name}</p>
                            <p className='ms-auto badge-danger'>{value.charge}Charge</p>
                        </div>

                    </div>

                </div>
            ))}
                    
             </Slider>
              
    </div>
  )
}

export default SecondCompp
