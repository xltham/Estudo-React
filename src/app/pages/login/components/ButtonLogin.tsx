

interface IButtonLoginProps {
    onClick: () => void;
    type: "submit" | "reset" | "button" ;
    children? : React.ReactNode  
}

export const ButtonLogin : React.FC<IButtonLoginProps> = ({onClick, type, children}) =>{
    return(
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}