import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs"
import { BiLogIn } from "react-icons/bi"



export default function first() {



    return (
        <main className="p-2 text bg-blue-500  flex justify-between border-b-black  py-8">
            <div className=" ">
                
            </div>
            <div className=" ">
                <div className=" icon-2 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-800  flex items-center gap-5  p-1">
                    <span className="text-white text-xs" >Logout</span>
                    <BiLogIn className=" text-white text-lg " />
                </div>
            </div>


        </main>

    )


}