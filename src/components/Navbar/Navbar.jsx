import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "*", name: "Not Found", id: 5 },
  ];

  return (
    <div className="text-black bg-gray-100 p-5">
      <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
        {open === true ? (
          <AiOutlineClose />
        ) : (
          <AiOutlineMenu />
        )}
      </div>
      {/* {open && (
        <ul className="md:flex">
          {routes.map((route) => (
            <Link key={route.id} route={route} />
          ))}
        </ul>
      )} */}
 
      <ul className={`md:flex absolute md:static duration-1000 bg-gray-100  ${open ? 'top-16': '-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
