import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/home">Início</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  )
}

export default Navbar;