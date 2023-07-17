import { useState } from "react";
import { toast } from "react-toastify"
import { Link } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { GoKey } from "react-icons/go";


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const hanleSubmit = (e) => {
        e.preventDefault();

        if ([email, password].includes("")) {
            toast.error("todos los campos son obligatorios", {
            theme:"dark"
            })
            return;
        }
        if (password.length < 6) {
            toast.error("La contraseña debe tener al menos 6 caracteres",
            {theme:"dark"})
            return;
            
        }
    }

  return (
    <div>
        <div className="max-w-[300px] ml-14">
            <img id="ofi" src="img/mv.png" alt="/" />
        </div>
         <div id="ofi" className="">
        <div className="card ">
          <h1 className=" font-bold test text-4xl">Iniciar Sesión</h1>
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
            <div className="x">
                <input 
                    value={password}
                   onChange={(e)=> setPassword(e.target.value)} 
                    type="password" 
                     placeholder="Contraseña" />
                    <div className="icons">{<GoKey/>} </div>

            </div>
            <div className=" ml-10 mt-2">
                Olvidaste tu contraseña? <Link to="forgetpassword" className="reg">Olvide mi contraseña</Link>
            </div>
            <div className="" >
                <button className="ing" type="submit">Ingresar</button>
        </div>
        <div className=" text-center mt-5 text-gray-100">
                No tienes una cuenta? <Link to="register" className="reg">Registrate</Link>
        </div>
        </form>
    </div>
    </div>
   
  )
}

export default Login