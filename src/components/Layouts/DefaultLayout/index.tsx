import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
type ContentProps = {
    children : ReactNode
}
function DefaultLayout({children} : ContentProps) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;