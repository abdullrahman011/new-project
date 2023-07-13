
import {MdDataUsage ,MdLabel} from "react-icons/md"
import {AiOutlineMail}from "react-icons/ai"
import{AiFillCaretDown,AiOutlineFileText}from"react-icons/ai";
import {VscThreeBars} from "react-icons/vsc"

export default function Data(){


    return(
        <div className="p-2" >
            <VscThreeBars className="three hover:bg-blue-800 p-0.5 rounded-md cursor-pointer"/>

         <div className="pt-6 px-2 text-2">
                   
              <p className="text-lg">Main Navigation</p> 
                     
             </div>
             <div className="  hover:bg-blue-300 gap-6 flex p-3  text-2 px-8 w-60 cursor-pointer ">
<MdDataUsage className="icon text-xl"/>
<p className="text-xl ">DashBoard</p>

            </div>
            <div className="  hover:bg-blue-300 gap-2 flex p-2  text-2  px-8 w-60 cursor-pointer justify-between">
<AiOutlineMail className="icon text-xl"/>
<p className="text-xl">Mail</p>

<AiFillCaretDown  className="icon text-xl "/>
            </div>
            
            <div className="  hover:bg-blue-300 gap-2 flex p-2  text-2 px-8 w-60 cursor-pointer justify-between">
            <MdLabel className="icon text-xl"/>

<p className="text-xl">Labels</p>

<AiFillCaretDown  className="icon text-xl"/>
            </div>
            <hr  />
            <div className="pt-2">
            <div className="bg-green-400 w-56 h-10 flex justify-center hover:bg-green-600 m-2 text-white text-2 pt-2 rounded-md cursor-pointer ">
                <AiOutlineFileText  className="icon text-white text-xl"/>
                QUICK SEND
            </div>

            </div>
           
        </div>

        


    )
}