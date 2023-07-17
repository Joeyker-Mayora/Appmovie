import { Outlet } from "react-router-dom"
const AuthLoyout = () => {
  return (
    <div id="ofi" className="  min-h-screen flex items-center justify-center  text-white">
         <Outlet/>
        <video className="" muted autoPlay loop>
            <source  src="/../video/mv.mp4" type="video/mp4" />
        </video>
        <div className="capa"></div>
        
       
    </div>
  )
}

export default AuthLoyout