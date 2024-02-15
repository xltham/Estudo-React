import { BrowserRouter, Route , Routes as Switch , Navigate} from "react-router-dom";

import { Dashboard, Login } from "../pages";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/entrar" Component={Login}/>
                <Route path="/pagina-inicial" Component={Dashboard}/>
                
                <Route path="*" Component={() => <Navigate to="/pagina-inicial" />}/>
            </Switch>
        </BrowserRouter>
    );
}