import React from 'react'
import { useState,useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cart from '../Cart';
import axios from "axios"
import { BiBookAdd } from 'react-icons/bi';
const Freebok = () => {

  

    const [book,setbook] =useState([])
  
    useEffect(()=>{
     
      const getBook =async()=>{
        try{
  
          const res= await axios.get("http://localhost:4001/book");
          console.log(res.data);
         const data= res.data.filter((data)=>data.category ==="Free")
          setbook(data);
        }catch(error){
          console.log(error)
        }
      }
      
  getBook()
  
    },[])
      

   

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
  <>

  <div className='max-w-screen-2xl mx-auto md:px-20 px-4 '>
  <div>
  <h1 className='pb-2 font-semibold text-xl'>Free Offered Course</h1>
  <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit.Accusabtium veritatis alias pariatur ad dolor repudiandae eligendi corpaoris nulla non suscitit iure neque earum?</p>
  </div>
 
  
 <div>

 <Slider {...settings}>
        
        {book.map((item)=>(
          <Cart item={item} key={item.id}/>
        ))}
      </Slider>
 </div>
 </div>
  </>
  )
}

export default Freebok