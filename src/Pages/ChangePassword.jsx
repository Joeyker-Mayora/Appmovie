import { useState } from "react";
import { toast } from "react-toastify"
import { GoKey } from "react-icons/go";
import { Link, useParams, useNavigate} from "react-router-dom";





const Registrer = () => {

  
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()


  const {token} = useParams()
  if (token !== 12345) {
    navigate("/")
  }




    const hanleSubmit = (e) => {
        e.preventDefault();

        if ([confirmPassword, password].includes("")) {
            toast.error("todos los campos son obligatorios",
            {theme:"dark"}
            )
            return;
        }
        if (password.length < 6) {
            toast.error("La contraseña debe tener al menos 6 caracteres",
            {theme:"dark"})
            return;
            
        }
        if (password !== confirmPassword) {
            toast.error("La contraseña no son las mismas",
            {theme:"dark"})
            return;
            
        }
        
    }

  return (
    <div>
      <div className="max-w-[300px] ml-[50%]">
            <img id="ofi" src="/../img/mv.png" alt="/" />
        </div>
       <div  id="ofi" className=" mt-4">
        <div className=" bg-red-700 rounded-lg px-[50px] py-[50px] ">
          <h1 className=" font-bold test text-4xl">Actualizar contraseña</h1>
        </div>
        
        <form onSubmit={hanleSubmit} className="submit">
            
            <div className="x">
                <input 
                    value={password}
                   onChange={(e)=> setPassword(e.target.value)} 
                    type="password" 
                     placeholder="Contraseña anterior" />
                    <div className="icons">{<GoKey/>} </div>

            </div>
            <div className="x">
                <input 
                    value={confirmPassword}
                   onChange={(e)=> setConfirmPassword(e.target.value)} 
                    type="password" 
                     placeholder="Nueva Contraseña" />
                   

            </div>
            <div className="" >
                <button className="ing" type="submit">Restablecer contraseña</button>
        </div>
        <div className=" text-center mt-5 text-gray-100">
                Ya tienes una cuenta? <Link to="/" className="reg">Ingresa</Link>
        </div>
        
        </form>
    </div>
    </div>
   
  )
}

export default Registrer