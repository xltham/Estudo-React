import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../shared/context";

export const Dashboard = () => {
    //useRef serve pra quando ocorra mudança em um numero nao renderize na tela
    const counterRef = useRef({counter: 0});

    const UsuarioLogado = useContext(UsuarioLogadoContext)

    return(
        <div>
        <p>Dashboard</p>
        
        <p>{UsuarioLogadoContext.nomeDoUsuario}</p>
        
        <p>Contador: {counterRef.current.counter}</p>
        <button onClick={() => counterRef.current.counter++}>somar</button>
        <button onClick={() => console.log (counterRef.current)}>revelar</button>

         <Link to="/entrar">Login</Link>
        </div>
    );

}