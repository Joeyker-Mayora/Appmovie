import { useState } from "react";
import { toast } from "react-toastify"
import { GrMail } from "react-icons/gr";
import { GoKey } from "react-icons/go";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";





const Forgetpassword = () => {

    const [email, setEmail] = useState("")
  



    const hanleSubmit = (e) => {
        e.preventDefault();

        if ([email].includes("")) {
            toast.error("todos los campos son obligatorios",
            {theme:"dark"}
            )
            return;
            
        }
        toast.success("Se ha enviado un codigo a tu email",
        {theme:"dark"}
        )
        
    }

  return (
    <div>
      <div className="max-w-[300px] ml-[50%]">
            <img id="ofi" src="img/mv.png" alt="/" />
        </div>
       <div  id="ofi" className=" mt-4">
        <div className=" bg-red-700 rounded-lg px-[30px] py-[50px] ">
          <h1 className=" font-bold test text-4xl">Recuperar contraseña</h1>
        </div>
        
        <form onSubmit={hanleSubmit} className="submit">
            
            <div className="x">
                <input 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)} 
                    type="email" 
                   placeholder="Email" />

                    <div className="icons">{<GrMail/>} </div>
            </div>
            <button className="ing" type="submit">
                Enviar instrucion
            </button>
        
        <div className=" text-center mt-5 text-gray-100">
                No tienes una cuenta? <Link to="registrer" className="reg">Registrate</Link>
        </div>
        
        </form>
    </div>
    </div>
   
  )
}

export default Forgetpassword