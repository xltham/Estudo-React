import { Routes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/context/UsuarioLogado";

export const App = () => {
  return (
    <UsuarioLogadoProvider nomeDoUsuario="Guilherme">
     <Routes />
    </UsuarioLogadoProvider>
  );
}

