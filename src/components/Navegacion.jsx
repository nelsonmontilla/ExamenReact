
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Navegacion({path, setPath}) {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="https://m.media-amazon.com/images/I/71lL+5cwJLL.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MakerReact 3D</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#Inicio" active={path === "Inicio" ? true : false} onClick={(e)=> setPath("Inicio")}>
          Inicio
        </NavbarLink>
        <NavbarLink href="#Inventario"active={path === "Inventario" ? true : false} onClick={(e)=> setPath("Inventario")}
        >Inventario</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
