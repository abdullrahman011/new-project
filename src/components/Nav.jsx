import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs"
import { BiLogIn } from "react-icons/bi"
import{IoMdNotifications ,IoIosSettings ,} from "react-icons/io";


export default function first() {



    return (
        <main className="  bg-blue-600  flex justify-between border-b-black  relative pb-2 ">
            <div className=" px-2 pt-2 text-white ">
                <p className=" font-medium">DashBoard</p>
                <div className=" flex   justify-center pt-2 px-6">
                <img src="360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" className=" w-32 h-32  absolute rounded-full "/>
            
                </div>
                <div className="pt-32  justify-center text-1 px-14">
                <p className=" text-xl font-bold">Your Name  </p>
           <p>Lead UI/UX Designer</p>
           
                </div >
                <hr />
                
                <div className="pt-1  flex gap-16 px-12">
                    
                <IoMdNotifications className=" mt-2 cursor-pointer text-2xl hover:bg-blue-700 p-0.5 rounded-full" />
                <IoIosSettings className=" mt-2 cursor-pointer text-2xl  hover:bg-blue-700 p-0.5 rounded-full"/>
                
                </div>
          
            </div>

          
            <div className=" pb-24 py-8 ">
                <div className=" icon-2  rounded-full cursor-pointer hover:bg-blue-800  flex items-center gap-5  p-1">
                    <span className="text-white text-xs" >Logout</span>
                    <BiLogIn className=" text-white text-lg " />
                </div>
               
               
            </div>
            


        </main>

    )


}