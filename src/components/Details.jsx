
import { FaFilter } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function Details() {
    return (
        <div className="bg-white   page rounded-lg">
            <div>
                <p className="font-bold pb-3">Team Member DashBoard</p>
            </div>
            <div className="flex gap-14 ">
                <div className="w-60 h-20 flex gap-6  bg-gradient-to-t from-blue-400 to-green-500 p-2 rounded-lg" >
                    <p className="Num">106 </p>
                    <p className="text-2 pt-5 tNum  text-white"> Decuments</p>
                </div>
                <div className="w-60 h-20 flex gap-6  bg-gradient-to-t from-red-300 to-purple-500 p-2 rounded-lg" >
                    <p className="Num">13 </p>
                    <p className="text-2 pt-5 tNum text-white"> Decuments Viewed</p>
                </div>
                <div className="w-60 h-20 flex gap-6  bg-gradient-to-t from-purple-400 to-blue-500 p-2 rounded-lg" >
                    <p className="Num">30 </p>
                    <p className="text-2 pt-5 tNum text-white"> Decuments Expiring</p>
                </div>
                <div className="w-60 h-20 flex gap-6  bg-gradient-to-t from-orange-500 to-yellow-200 p-2 rounded-lg "  >
                    <p className="Num">59 </p>
                    <p className="text-2 pt-5 tNum text-white"> Decuments signed</p>
                </div>


            </div>
            <div className="bg-blue-300 p-2  my-4 flex justify-between ">

                <p className="font-bold px-3 pt-1">Document Sent Details</p>
                <ul className=" flex gap-6 justify-between">
                    <li className="flex justify-start bg-white m-1 pr-32 rounded-md text-gray-400">
                        <BiSearch className="m-1" />
                        <p>Search</p>
                    </li>
                    <li className="bg-blue-600 p-1 rounded-lg cursor-pointer">
                        <p className="text-white">Export</p>
                    </li>
                    <li className="bg-blue-600 p-1 rounded-lg flex text-white cursor-pointer ">
                        <FaFilter className="m-1 p-0.5" />
                        <p className="">Ajun Makwana</p>
                        <AiFillCaretDown className="m-1 p-0.5" />
                    </li>
                </ul>




            </div>
            <div className="flex">
                <div className="px-6">
                    <p className="font-bold">Document Name</p>
                    <hr />
                    <div className="m-2">
                        <p className=" text-xs font-medium"> Patty o furniture doc</p>
                        <p className=" font-thin  text-xs">Donald Randolph</p>
                        <hr />

                        <p className=" text-xs font-medium mt-2"> Ty Ayelloribbin.pdf</p>
                        <p className=" font-thin  text-xs mb-2">Lynnette Manson</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> Maureen Biologist doc</p>
                        <p className=" font-thin  text-xs mb-2">LJacklyn Shattuck</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> Rpy Commishiun pdf</p>
                        <p className=" font-thin  text-xs mb-2">Mary wehmeyer</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> Brideget Therivea.doc</p>
                        <p className=" font-thin  text-xs mb-2">Mary Geoghegan</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> Gene Eva Conahxb.pdf</p>
                        <p className=" font-thin  text-xs mb-2">Barbara Faust</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> Roy L. Convhdbhbd.pdf</p>
                        <p className=" font-thin  text-xs mb-2">Joswph Trinidad</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2">Maureen Biologist.doc </p>
                        <p className=" font-thin  text-xs mb-2">Marvin Taylor</p>

                    </div>


                </div>
                {/* ........1........ */}
                <div className="px-4">
                    <p className="font-bold">Recipient Name</p>
                    <hr />
                    <div className="m-2">
                        <p className=" text-xs font-medium mb-4"> Carolyn Leblanc</p>
                        <hr />
                        <p className=" text-xs font-medium mt-3 mb-5 ">Margarent Swartz</p>
                        <hr />
                        <p className=" text-xs font-medium mb-4 mt-3"> Amy White</p>
                        <hr />
                        <p className=" text-xs font-medium mt-3 mb-6 ">Richard Dudiey</p>
                        <hr />
                        <p className=" text-xs font-medium mb-4 mt-3"> Brian Williamson</p>
                        <hr />
                        <p className=" text-xs font-medium mt-3 mb-6 ">Timothy Fisher</p>
                        <hr />
                        <p className=" text-xs font-medium mb-4 mt-3"> Patrica Blossom</p>
                        <hr />
                        <p className=" text-xs font-medium mt-3 mb-4 ">Timothy Scott</p>

                    </div>

                </div>
                <hr />
                {/* .......2....... */}
                <div className="px-4">
                    <p className="font-bold">Email</p>
                    <hr />
                    <div className="m-2">
                        <p className=" text-xs font-medium mb-4"> CarolynLeblanc@1234.com</p>
                        <hr />
                        <p className=" text-xs font-medium mb-4 mt-4"> MargarentSwartz@122.com

                        </p>
                        <hr />
                        <p className=" text-xs font-medium mt-3 mb-4 ">AmyWhite@1223.com

                        </p>
                        <hr />
                        <p className=" text-xs font-medium mb-4 mt-5"> RichardDudiey@123as.com</p>
                        <hr />
                        <p className=" text-xs font-medium mt-3 mb-4 ">BrianWilliamson@123.com</p>
                        <hr />
                        <p className=" text-xs font-medium mb-4 mt-5"> TimothyFisher@123d.com</p>
                        <hr />
                        <p className=" text-xs font-medium mt-3 mb-4 ">PatricaBlossom@asd.com</p>
                        <hr />
                        <p className=" text-xs font-medium mt-3 mb-4 ">TimothyScott@asdf.com</p>


                    </div>

                </div>
                {/* .......3....... */}
                <div className="px-20">
                    <p className="font-bold">Status</p>
                    <hr />
                    <ul >
                        <li className="flex mt-3 justify-start">
                            <VscDebugBreakpointLog className="text-green-600 text-sm" />
                            <p className=" text-xs font-medium mb-4"> Complete</p>

                        </li>
                        <hr />
                        <li className="flex mt-4 justify-start "> <VscDebugBreakpointLog className="text-red-600 text-sm" />
                            <p className=" text-xs font-medium mb-4"> Expired</p>
                        </li>
                        <hr />
                        <li className="flex mt-3 justify-start"> <VscDebugBreakpointLog className="text-blue-600 text-sm" />
                            <p className=" text-xs font-medium mb-4"> Pending</p>
                        </li>
                        <hr />
                        <li className="flex mt-4 justify-start"> <VscDebugBreakpointLog className="text-yellow-400 text-sm" />
                            <p className=" text-xs font-medium mb-4"> Viewed</p>
                        </li>
                        <hr />
                        <li className="flex mt-3 justify-start"> <VscDebugBreakpointLog className="text-green-600 text-sm" />
                            <p className=" text-xs font-medium mb-4"> Complete</p>
                        </li>
                        <hr />
                        <li className="flex mt-5 justify-start"> <VscDebugBreakpointLog className="text-red-600 text-sm" />
                            <p className=" text-xs font-medium mb-4"> Expired</p>
                        </li>
                        <hr />
                        <li className="flex mt-3 justify-start"> <VscDebugBreakpointLog className="text-green-600 text-sm" />
                            <p className=" text-xs font-medium mb-4"> Complete</p>
                        </li>
                        <hr />
                        <li className="flex mt-2 justify-start"> <VscDebugBreakpointLog className="text-red-600 text-sm" />
                            <p className=" text-xs font-medium mb-4"> Expired</p>
                        </li>

                    </ul>
                </div>
                {/* .......4....... */}
                <div className=" ">
                    <p className="font-bold">Sent Date</p>
                    <hr />
                    <div className="m-2">
                        <p className=" text-xs font-medium "> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-1">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-2">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-1">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-2">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-1">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-2">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-2">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-1"> 11/14/2019</p>
                        <p className=" font-thin  text-xs">04:09:44pm</p>



                    </div>

                </div>
                {/* .......5....... */}
                <div className="px-10">
                    <p className="font-bold">Last Actoin</p>
                    <hr />

                    <div className="m-2">
                        <p className=" text-xs font-medium "> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-1">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-2">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-1">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-2">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-1">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-2">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-2"> 11/14/2019</p>
                        <p className=" font-thin  text-xs mb-2">04:09:44pm</p>
                        <hr />
                        <p className=" text-xs font-medium mt-1"> 11/14/2019</p>
                        <p className=" font-thin  text-xs">04:09:44pm</p>


                    </div>

                </div>
                {/* .............. */}
                <div className="px-10">
                    <p className="font-bold"> Actoin</p>
                    <hr />
                    <div className="">
                        <div className="m-2 flex bg-blue-500 text-white p-1 rounded-lg  hover:bg-blue-700 mt-3 mb-4">
                            <p className=" text-xs font-medium "> ACTIONS</p>
                            <AiFillCaretDown className="p-0.5" />
                            <hr />
                        </div>
                        <div className="m-2 flex bg-blue-500 text-white p-1 rounded-lg  hover:bg-blue-700 mt-6 mb-4">
                            <p className=" text-xs font-medium "> ACTIONS</p>
                            <AiFillCaretDown className="p-0.5" />
                        </div>
                        <div className="m-2 flex bg-blue-500 text-white p-1 rounded-lg  hover:bg-blue-700 mt-6 mb-4">
                            <p className=" text-xs font-medium "> ACTIONS</p>
                            <AiFillCaretDown className="p-0.5" />
                        </div>
                        <div className="m-2 flex bg-blue-500 text-white p-1 rounded-lg  hover:bg-blue-700 mt-6 mb-4">
                            <p className=" text-xs font-medium "> ACTIONS</p>
                            <AiFillCaretDown className="p-0.5" />
                        </div>
                        <div className="m-2 flex bg-blue-500 text-white p-1 rounded-lg  hover:bg-blue-700 mt-6 mb-4 ">
                            <p className=" text-xs font-medium "> ACTIONS</p>
                            <AiFillCaretDown className="p-0.5" />
                        </div>
                        <div className="m-2 flex bg-blue-500 text-white p-1 rounded-lg  hover:bg-blue-700 mt-6 mb-4">
                            <p className=" text-xs font-medium "> ACTIONS</p>
                            <AiFillCaretDown className="p-0.5" />
                        </div>
                        <div className="m-2 flex bg-blue-500 text-white p-1 rounded-lg  hover:bg-blue-700 mt-6 mb-4">
                            <p className=" text-xs font-medium "> ACTIONS</p>
                            <AiFillCaretDown className="p-0.5" />
                        </div>
                        <div className="m-2 flex bg-blue-500 text-white p-1 rounded-lg  hover:bg-blue-700">
                            <p className=" text-xs font-medium "> ACTIONS</p>
                            <AiFillCaretDown className="p-0.5" />
                        </div>
                    </div>

                </div>
                {/* .............. */}

            </div>
        </div>
    )


}