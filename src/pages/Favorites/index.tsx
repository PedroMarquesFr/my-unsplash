import React, { useContext } from "react";
import ImagesWrapper from "../../components/ImagesWrapper";
import Context from "../../contextAPI/setup";

import { Container } from "./styles";

const Favorites: React.FC = () => {
  const { favs } = useContext(Context);
  return (
    <Container>
      <ImagesWrapper photoArray={favs} />
    </Container>
  );
};

export default Favorites;
