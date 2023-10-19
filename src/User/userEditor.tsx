 
 import React from 'react'
 
 export const UserEditor = () => {
   return (
    <div className='bg-transparent'>
 <div className='z-10 mx-10 my-10 border-2 border-gray-300 rounded-lg px-6 py-4 bg-[#f9fafb]' style={{position:'absolute'}} > 
                         <form className='w-full grid grid-cols-1  lg:grid-cols-2 lg:gap-6'>
                          <div className='flex flex-col '>
                            <label>Image</label>
                            <input type='file' className='border-[1px] border-gray-300 rounded-lg   py-[2px] lg:py-[5px] w-full mb-3 flex items-center'/>
                          </div>
                          <div className='flex flex-col'>
                            <label>Email</label>
                            <input type='email' className='border-[1px] border-gray-300 rounded-lg h-8 lg:h-10 w-full mb-3'/>
                          </div>
                          <div className='flex flex-col'>
                            <label>Mobilenumber</label>
                            <input type='text' className='border-[1px] border-gray-300 rounded-lg h-8 lg:h-10 w-full  mb-3'/>
                          </div>
                          <div className='flex flex-col'>
                            <label>Firstname</label>
                            <input type='text' className='border-[1px] border-gray-300 rounded-lg h-8 lg:h-10 w-full  mb-3'/>
                          </div>
                          <div className='flex flex-col'>
                            <label>Lastname</label>
                            <input type='text' className='border-[1px] border-gray-300 rounded-lg h-8 lg:h-10 w-full  mb-3'/>
                          </div>
                          <div className='flex flex-col'>
                            <label>country</label>
                            <input type='text' className='border-[1px] border-gray-300 rounded-lg h-8 lg:h-10 w-full  mb-3'/>
                          </div>
                          <div className='flex flex-col'>
                            <label htmlFor='gender'>Gender</label>
                            <select  id="gender" className='border-[1px] border-gray-300 rounded-lg h-10 w-full  mb-3  text-gray-500 px-2'>
                              <option selected disabled> Gender</option>
                           <option>Male</option>
                           <option>Female</option>
                           <option>Other</option>
                           </select>
                          </div>
                          
                          <div className='flex flex-col'>
                            <label>Address</label>
                            <textarea className='border-[1px] border-gray-300 rounded-lg h-8 lg:h-10 w-full  mb-3'> </textarea>
                          </div>
                          <div className='flex flex-col'>
                            <label>Social Media Link</label>
                            <input type='text'className='border-[1px] border-gray-300 rounded-lg h-8 lg:h-10 w-full  mb-3'/>
                          </div>
                          <div className='flex flex-col'>
                            <label htmlFor='currency'>Currency</label>
                            <select  id="currency" className='border-[1px] border-gray-300 rounded-lg h-8 lg:h-10 w-full  mb-3  text-gray-500 px-2'>
                            <option selected disabled> Currency type</option>
                           <option>Male</option>
                           <option>Female</option>
                           <option>Other</option>
                           </select>
                          </div>
                          <div className='flex flex-col'>
                          <label htmlFor='language'>Language</label>
                          <select  id="language" className='border-[1px] border-gray-300 text-gray-500 rounded-lg h-8 lg:h-10 w-full  mb-3 px-2' >
                            <option selected disabled> Language</option>
                           <option>Tamil</option>
                           <option>English</option>
                           <option>Hindi</option>
                           </select>
                    
                           </div> 
                         
                          

                          </form> 
                    </div>
                    </div>
                     )
                    }
                    