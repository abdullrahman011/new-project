import { AiOutlineSearch, AiTwotoneFilter } from "react-icons/ai"
import React, { useState } from "react"

export default function Details() {
const[data,setData]=useState(null)
    
    function gateData(val) {
        setData(val.target.value)
        console.warn(val.target.value)
    }
    return (
        <main className>

            <div className="item-Search text  w-4/5  bg-gray-200 gap-8  py-0.5 rounded">
                <span className="p-2 Doucument-text  text-gray-600" >Doucument sent Details</span>
                <div className="item-Search-1 text  w-20  cursor-pointer  bg-white gap-8  py-0.5 rounded" >

                    <AiOutlineSearch cl />
                    <input type="text" className=" texts  flex justify-center" onClick={gateData} />

                </div >
                <div className="item-Search-2 text cursor-pointer w-10  bg-blue-500 gap-1 py-1 rounded hover:bg-blue-800 ">
                    <p className="text-center">EXPORT</p>
                </div>
                <div className="item-Search-3 text cursor-pointer  w-20  bg-blue-500 gap-3   hover:bg-blue-800  rounded">
                    <AiTwotoneFilter className="texts-2 " />
                    <span className=" flex justify-end ">Arjun Markwana</span>

                </div>
               

            </div>
           


        </main>
    )
}