import { CiMenuBurger } from "react-icons/ci"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react";

const Navbar = () => {

  const [toggle, setToggle]=useState(false)

  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/contact', name: 'Contact' },
    { id: 4, path: '/products', name: 'Products' },
    { id: 5, path: '/profile', name: 'Profile' },
  ];
  

  return (
    <nav className="w-4/5 mx-auto mt-5 p-3 ">
      <div className="bg-sky-500 p-2 lg:hidden duration-200" onClick={()=>setToggle(!toggle)}>
      {
        toggle?
        <AiOutlineClose className="text-2xl" />
        :
        <CiMenuBurger className="text-2xl"/>
        
      }
      </div>
      <ul className={` duration-1000 lg:flex gap-5 text-xl absolute lg:static bg-sky-400 p-2 ${toggle? "top-[72px]":"-top-60"}`}>
      {
        routes.map(route=><li className="px-4 py-1 mb-1 bg-sky-200" key={route.id}><a href={route.path}>{route.name}</a></li>)

      }
      </ul>
    </nav>
  );
};

export default Navbar;