import {createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout?: () => void;
    children?: React.ReactNode;
}
export const UsuarioLogadoContext = createContext <IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoContextData> = ({children}) =>{
  const [nome, setNome] = useState ('adolfo');
  useEffect(() => {
    setTimeout(() => {
      setNome('Guilherme')
    }, 3000);
  })


  const handlelogout = useCallback(() => {
    console.log('Logout executou')
  }, []);
  return(
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handlelogout}}>
      {children}           
    </UsuarioLogadoContext.Provider>
  );
}
