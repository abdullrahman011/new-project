
import Data from "./Data"
export default function Info() {

    return (
        <main >
            <div className="item-Info text w-4/5 bg-white gap-10  py-14 rounded ">
                <span className=" item-1  px-3.5 gap-2" >Team member Dashboard</span>
                <div className="text-end text-white ">
                    <div className="item-Info-A  bg-green-400  w-40 shadow-xl rounded p-2 hover:bg-green-600 ">
                        <span className="front-size">document sent</span>
                    </div>
                    <div className="item-Info-B  bg- bg-violet-500  w-40 shadow-xl rounded p-2 hover:bg-violet-600 ">
                        <span className="front-size">document View</span>
                    </div>
                    <div className="item-Info-C  bg- bg-blue-300  w-40 shadow-xl rounded p-2 hover:bg-blue-400 ">
                        <span className="front-size">document Expiring</span>
                    </div>
                    <div className="item-Info-D  bg-  bg-orange-400  w-40 shadow-xl rounded p-2  hover:bg-orange-500 ">
                        <span className="front-size">document Expiring</span>
                    </div>
                </div>

                <Data/>
            </div>

        </main>

    )



}