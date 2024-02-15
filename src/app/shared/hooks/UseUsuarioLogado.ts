import { useContext } from "react"
import { UsuarioLogadoContext } from "../context";


export const UseUsuarioLogado = () => {
  const context = useContext(UsuarioLogadoContext);
  return context 
}