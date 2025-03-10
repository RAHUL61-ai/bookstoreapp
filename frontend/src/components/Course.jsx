import React, { useEffect, useState } from 'react'

import Cart from '../Cart'
import {Link} from "react-router-dom"
import axios from "axios"
const Course = () => {

  const [book,setbook] =useState([])

  useEffect(()=>{
   
    const getBook =async()=>{
      try{

        const res= await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setbook(res.data)
      }catch(error){
        console.log(error)
      }
    }
    
getBook()

  },[])
    
  return (
    <>
    
    <div className='max-w-screen-2xl mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'><h1 className='text-2xl font-semibold md:text-4xl'>
        We'are delighted to have you <span className='text-pink-500'>Here:</span>
            </h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officia dignissimos temporibus exercitationem voluptatibus, qui omnis excepturi possimus modi impedit. Consectetur, a? Suscipit quas tempore, similique quo ut harum? Iure!</p>

         <Link to="/">
         <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover hover:bg-pink-700 duration-300'>Back</button>  
         </Link>   
          
            </div>
            
        <div className='mt-12 grid grid-cols1 md:grid-cols-4'>
        {
             book.map((item)=>(

                        <Cart key={item.id} item={item}/>
              ) )
            }
        </div>
    </div>
    
    </>
  )
}

export default Course