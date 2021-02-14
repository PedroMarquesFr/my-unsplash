import React from "react";
import { image } from "../../contextAPI/data";
import ImagePrev from "./ImagePrev";

import { Container } from "./styles";

const ImagesWrapper: React.FC<{ photoArray: image[] }> = ({ photoArray }) => {
  return (
    <Container>
      {photoArray.map((image:image) => (
        <ImagePrev
          image={image}
        />
      ))}
    </Container>
  );
};

export default ImagesWrapper;
