import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";                                       
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
       {id: 1, path: "/home", name: "Home"},
       {id: 2, path: "/about", name: "About"},
       {id: 3, path: "/services", name: "Services"},
       {id: 4, path: "/products", name: "Products"},
       {id: 5, path: "/contact", name: "Contact"}
    ];

    return (
           <nav>
            <div  className="md:hidden" onClick={() => setOpen(!open)}>
                {
                  open === true? <GrClose  className="tex-2xl"/>:<RiMenu2Line className="text-2xl"/>
                }
              
            </div>
           <ul className="md:flex">
           {
                routes.map(route => <Link key = {route.id} route = {route}></Link>)
            }
           </ul>
           </nav>
    );
};

export default NavBar;