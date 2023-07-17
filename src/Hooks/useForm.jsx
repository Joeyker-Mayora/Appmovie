import { useState } from "react";
import { toast } from "react-toastify"


export const useForm = () => {
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

    return {
        hanleSubmit,
    }

}