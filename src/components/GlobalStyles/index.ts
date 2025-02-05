import { ReactNode } from "react";
import "./GlobalStyle.scss"
type GlobalStylesProps = {
    children : ReactNode
}

function GlobalStyles({children} : GlobalStylesProps){
    return children
}

export default GlobalStyles;