import { useState } from "react";
import { toast } from "react-toastify"
import { GrMail } from "react-icons/gr";
import { GoKey } from "react-icons/go";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";





const Registrer = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")



    const hanleSubmit = (e) => {
        e.preventDefault();

        if ([email, password].includes("")) {
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
            <img id="ofi" src="../img/mv.png" alt="/" />
        </div>
       <div  id="ofi" className=" mt-4">
        <div className=" bg-red-700 rounded-lg px-[110px] py-[50px] ">
          <h1 className=" font-bold test text-4xl">Crear cuenta</h1>
        </div>
        
        <form onSubmit={hanleSubmit} className="submit">
            <div className="x">
                <input 
                    value={name}
                    onChange={(e)=> setName(e.target.value)} 
                    type="name" 
                   placeholder="Nombre y Apellido" />
                   
                    <div className="icons">{<FaUserPlus/>} </div>
            </div>
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
            <div className="x">
                <input 
                    value={confirmPassword}
                   onChange={(e)=> setConfirmPassword(e.target.value)} 
                    type="password" 
                     placeholder="Confirmar Contraseña" />
                   

            </div>
            <div className="" >
                <button className="ing" type="submit">registrarse</button>
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