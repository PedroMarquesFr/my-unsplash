import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/fav">Favs</Link>
    </Container>
  );
};

export default Header;
