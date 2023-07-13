


<link rel="stylesheet" href="./page.css"/>
import Nav from "./components/Nav"
import Info from "./Info"
import Details from "./components/Details"
import Profile from "./Profile"
import Data from "./components/Data"

export default function App(){
  

  return (
    <main  className=" relative">
   
    <Nav className=" relative"/>
    
    <Data/>
    <Details className=" absolute"/>
 
    
    </main>
   
  )

}


