
import { useState } from "react";
import { MdNotificationsActive } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs"
export default function Profile() {

    const [open, setOpen] = useState(false);
    const menus = ['Dashboard', 'Mail', 'Lable', 'Setting'];
    return (

        <div className="p-2 ">
            <div className=" icon-1 bg-blue-600 rounded-full hover:bg-blue-800  p-1 flex justify-start">

                <BsThreeDotsVertical onClick={()=>setOpen(!open)} className="text-l text-white cursor-pointer " />

            </div>
            <div className="profileP ">
              

            
            {open &&
                <div className="bg-blue-500 flex  w-40 h-80 p-2 shadow-lg pt-10 rounded-lg " >
  <img src="360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" className="imgP w-16 h-16   absolute rounded-full "/>

                    <ul className="text-white p-2 pt-20">
                        <li>
                            <MdNotificationsActive className="rounded cursor-pointer  hover:bg-blue-700 " />
                        </li>
                        {
                            menus.map((menu) => (

                                <li className="   rounded cursor-pointer py-2.5  hover:bg-blue-700 " key={menu} >{menu}</li>
                            ))
                        }
                    </ul>
                </div>}
                </div>
        </div>
    )
}