import { Link } from "react-router-dom";
import { useCallback, useState } from "react";

export const Dashboard = () => {
    const[lista, setLista] = useState<string[]>(['teste1', 'teste2', 'teste3']);

const handleinputonkeydown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if(e.key === 'Enter'){
        if(e.currentTarget.value.trim().length === 0)return
         
        const value = e.currentTarget.value;
        e.currentTarget.value = '';

        setLista((oldlista) =>{
         
            if(oldlista.includes(value)) return oldlista

            return [...oldlista, value]
        })
    }
}, [])

    return(
        <div>
        <p>LISTA</p>
        <input
        onKeyDown={handleinputonkeydown}/>

        <ul>
            {lista.map((value,index) => {
                return <li key={value}>{value}</li>
            })}
        </ul>

         <Link to="/entrar">Login</Link>
        </div>
    );

}