import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { InputLogin } from "./components/inputlogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const Login = () => {
    //useRef serve para guardar valores dentro de uma variavel 
    const inputPasswordRef = useRef<HTMLInputElement> (null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //useMemo retorna um valor memorizado, nesse caso ele devolve o tamanho da senha
    const passwordlength = useMemo(()=> {
        return password.length
    }, [password.length]);

    //use callback memoriza funções, nesse caso ele funciona para fazer a função acionar apenas quando o botão de entrar for acionado
    const handleEntrar = useCallback(() => {
            console.log(email, password)
    }, [email,password])

    return (
        
        <div>
            
            <form>
            
            <p>quantidade de caracteres para a senha: {password.length}</p>
                
                <InputLogin
                 label="Email"
                 value={email}
                 onChange={newValue => setEmail(newValue)}
                 onPressEnter={() => inputPasswordRef.current?.focus()}
                 />

                <InputLogin
                 label="Senha"
                 type="Password"
                 value={password}
                 ref={inputPasswordRef}
                 onChange={newValue => setPassword(newValue)}
                 onPressEnter={handleEntrar}
                 />
                 
                {/* { <label>
                    <span>senha</span>
                    <input type="password"
                     value={password} 
                     ref={inputPasswordRef}
                     onChange={e => setPassword(e.target.value)}/>
                </label> } */}
                
                {/* <button type="button" onClick={handleEntrar}>
                    entrar
                </button> */}
                
                <ButtonLogin type="button" onClick={handleEntrar}>
                 Entrar
                </ButtonLogin>
                <ButtonLogin type="button" onClick={handleEntrar}>
                 teste    
                </ButtonLogin>
            </form>
            
            <Link to="/pagina-inicial"><button>voltar</button></Link>

        </div>
    );
}