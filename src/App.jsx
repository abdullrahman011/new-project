


<link rel="stylesheet" href="./page.css"/>
import Nav from "./Nav"
import Info from "./Info"
import Details from "./Details"
import Profile from "./Profile"

export default function App(){
  

  return (
    <main  className=" relative">
     <div className=" proflie-1 absolute" >
    <Profile />
    </div>
    <Nav/>
    
   
    <Details/>
    
    <Info/>
   
    
    
    </main>
   
  )

}


